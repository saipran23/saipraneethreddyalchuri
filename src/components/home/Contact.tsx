import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { email, socials } from "@/data/socialLinks";
import { sendContact, type ContactValues } from "@/lib/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
const empty: ContactValues = { name: "", email: "", subject: "", message: "" };
export function Contact() {
  const [values, setValues] = useState<ContactValues>(empty),
    [errors, setErrors] = useState<Partial<ContactValues>>({}),
    [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false),
    [copied, setCopied] = useState(false);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Partial<ContactValues> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3)
      next.subject = "Add a subject of at least 3 characters.";
    if (values.message.trim().length < 10)
      next.message = "Tell me a little more — at least 10 characters.";
    setErrors(next);
    setStatus("");
    if (Object.keys(next).length) {
      document.getElementById(`contact-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    setBusy(true);
    try {
      const result = await sendContact(values);
      setStatus(
        result === "sent"
          ? "Thanks — your message has been sent."
          : "Your email draft is ready in your mail app. Review it and press Send there.",
      );
      if (result === "sent") setValues(empty);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please use the email link.",
      );
    } finally {
      setBusy(false);
    }
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatus(`Email me at ${email}`);
    }
  };
  return (
    <section id="contact" className="contact section-shell dark-section">
      <span aria-hidden="true" className="contact-backdrop">
        LET’S TALK
      </span>
      <div className="section-kicker">
        <span>06 / YOUR MOVE</span>
        <span>GOOD WORK STARTS WITH A CONVERSATION</span>
      </div>
      <div className="contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">LET’S CREATE SOMETHING</p>
          <h2>
            LET’S BUILD
            <br />
            SOMETHING
            <br />
            <span>MEANINGFUL.</span>
          </h2>
          <p className="body-muted">
            Have a project, internship, collaboration
            <br className="desktop-only" /> or opportunity in mind? Let’s talk.
          </p>
          <div className="contact-email">
            <a href={socials.email}>{email}</a>
            <button
              className="icon-button"
              onClick={copy}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <div className="contact-socials">
            {Object.entries(socials)
              .filter(([key]) => key !== "email")
              .map(([key, url]) => (
                <a href={url} key={key} target="_blank" rel="noreferrer">
                  {key}
                  <ArrowUpRight size={15} />
                </a>
              ))}
          </div>
          <div className="availability">
            <span className="status-dot" />
            <span>OPEN TO SDE / BACKEND / FULL-STACK OPPORTUNITIES</span>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <form onSubmit={submit} noValidate>
            <div className="form-row">
              {(["name", "email"] as const).map((key) => (
                <div className="form-field" key={key}>
                  <label htmlFor={`contact-${key}`}>
                    {key === "name" ? "YOUR NAME" : "EMAIL"}
                  </label>
                  <Input
                    id={`contact-${key}`}
                    name={key}
                    type={key === "email" ? "email" : "text"}
                    autoComplete={key}
                    placeholder={
                      key === "name"
                        ? "How should I call you?"
                        : "you@example.com"
                    }
                    value={values[key]}
                    onChange={(e) =>
                      setValues({ ...values, [key]: e.target.value })
                    }
                    required
                    maxLength={160}
                    aria-invalid={!!errors[key]}
                    aria-describedby={errors[key] ? `${key}-error` : undefined}
                  />
                  {errors[key] && (
                    <span id={`${key}-error`} className="field-error">
                      {errors[key]}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">SUBJECT</label>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="What do you have in mind?"
                value={values.subject}
                onChange={(e) =>
                  setValues({ ...values, subject: e.target.value })
                }
                required
                maxLength={180}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <span id="subject-error" className="field-error">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">MESSAGE</label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="A little about your idea…"
                value={values.message}
                onChange={(e) =>
                  setValues({ ...values, message: e.target.value })
                }
                required
                rows={4}
                maxLength={4000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="field-error">
                  {errors.message}
                </span>
              )}
            </div>
            <Button type="submit" className="send-button" disabled={busy}>
              {busy ? "PREPARING…" : "SEND MESSAGE"}
              <ArrowUpRight size={20} />
            </Button>
            <p className="form-note">
              {import.meta.env.VITE_FORMSPREE_ENDPOINT
                ? "Send a message directly."
                : "Opens your email app with a prepared draft."}
            </p>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
