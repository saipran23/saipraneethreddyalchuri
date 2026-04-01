import dotenv from "dotenv";
import express from "express";
dotenv.config();  

app.use(express.urlencoded({ extended: true }));
import app from "./app.js";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
