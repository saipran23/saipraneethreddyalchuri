import db from "../config/db.js";

export const contact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required",
      });
    }

    await db.query(
      "INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    return res.status(201).json({
      message: "Send successfully",
    });
  } catch (err) {
    console.error("response -", err.message);

    return res.status(500).json({
      message: "Database error",
      error: err.message,
    });
  }
};
