import { email } from "@/data/socialLinks";
export interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
// A public Formspree endpoint can be configured at build time. No secret is exposed.
export async function sendContact(
  values: ContactValues,
): Promise<"sent" | "draft"> {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  if (endpoint) {
    const url = new URL(endpoint);
    if (url.protocol !== "https:")
      throw new Error("Please use the email link below.");
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok)
      throw new Error(
        "The message could not be sent. Please try again or use the email link.",
      );
    return "sent";
  }
  const body = `Hi Praneeth,\n\n${values.message}\n\nFrom: ${values.name}\nReply to: ${values.email}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
  return "draft";
}
