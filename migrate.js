import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import { User } from "./models/userModel.js";
import inquirer from "inquirer";
import { Product } from "./models/Product.js";

// 👉 Your MySQL root password is in the .env file (loaded by models/db.js)
const DB_PASSWORD = process.env.DB_PASSWORD || "";

const rootSequelize = new Sequelize(
  `mysql://root:${encodeURIComponent(DB_PASSWORD)}@localhost:3306/`
);

const { createDb } = await inquirer.prompt([
  {
    type: "confirm",
    name: "createDb",
    message: "Database 'routing-activity' may not exist. Create it?",
    default: true,
  },
]);

if (createDb) {
  await rootSequelize.query("CREATE DATABASE IF NOT EXISTS `routing-activity`;");
  console.log("✅ Database created (if it did not exist)");
}

try {
  await sequelize.authenticate();
  console.log("✅ Connected to MySQL database!");
  await sequelize.sync({ force: true });
  console.log("✅ Tables created for all models!");
} catch (err) {
  console.error("❌ Migration failed:", err);
} finally {
  process.exit();
}