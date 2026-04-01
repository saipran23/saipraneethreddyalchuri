import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.on("connect", () => {
  console.log("PostgreSQL connected ✅");
});

db.on("error", (err) => {
  console.error("Unexpected PostgreSQL error ❌", err);
});

export default db;
