import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql', // ambil dari .env
    port: process.env.DB_PORT,
  });

export default db;

db.sync().then(() => {
  console.log("✅ Database synced");
}).catch((err) => {
  console.error("❌ Failed to sync DB:", err);
});