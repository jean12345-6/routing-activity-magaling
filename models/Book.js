import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

const Book = sequelize.define("Book", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
}, {
  tableName: "books",
});

// Creates the books table if it doesn't exist yet
await Book.sync();

export default Book;