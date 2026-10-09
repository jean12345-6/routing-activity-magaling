import express from "express";
import { homePage } from "../controllers/homeController.js";
import { dashboardPage } from "../controllers/dashboardController.js";
import { usersPage } from "../controllers/usersController.js";
import { settingsPage } from "../controllers/settingsController.js";
import { testPage } from "../controllers/testController.js";
import { product } from "../controllers/product.js";
import { activitiesPage } from "../controllers/activitiesController.js";
import Book from "../models/Book.js";
import { insert, get, show, update, destroy, listPage, createPage, store, editPage, saveEdit, remove } from "../controllers/bookController.js";

const router = express.Router();

router.get("/activities", activitiesPage);

router.get("/activity1", (req, res) => {
  res.send("Welcome to Jean's routes!");
});

// Pages
router.get("/", homePage);
router.get("/dashboard", dashboardPage);
router.get("/admin/dashboard", dashboardPage);
router.get("/users", usersPage);
router.get("/settings", settingsPage);
router.get("/test", testPage);

// Product API (for Postman)
// Product API (for Postman)
router.get("/product", product.index);
router.get("/api/products", product.all);
router.get("/api/products/:id", product.isa);
router.post("/api/products", product.insert);
router.put("/api/products/:id", product.update);
router.delete("/api/products/:id", product.remove);

// Book API (Activity 1)
router.post("/books", insert);
router.get("/books", get);
router.get("/books/:id", show);
// Book API (Activity 2)
router.put("/books/:id", update);
router.delete("/books/:id", destroy);

// Book Views (Activity 3)
router.get("/library", listPage);
router.get("/library/create", createPage);
router.post("/library", store);

router.get("/library/:id", editPage);
router.post("/library/:id", saveEdit);
router.post("/library/:id/delete", remove);

export default router;
