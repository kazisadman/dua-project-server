import Database from "better-sqlite3";

let db: Database.Database;

try {
  db = new Database("./src/app.db");

  console.log("Database is connected");
} catch (error) {
  console.log("Database connection failed!", error);
  process.exit(1);
}

export default db;
