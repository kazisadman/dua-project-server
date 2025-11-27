import express from "express";
import db from "./db";

const app = express();

app.get("/test-db", (req, res) => {
  try {
    const row = db.prepare("SELECT sqlite_version() AS version").get();
    res.json({ message: "Database connected" });
  } catch (error) {
    res.status(500).json({ message: "Database query failed", error });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
