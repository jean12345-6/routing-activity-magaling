import express from "express";
import { homePage } from "../controllers/homeController.js";
import { dashboardPage } from "../controllers/dashboardController.js";
import { usersPage } from "../controllers/usersController.js";
import { settingsPage } from "../controllers/settingsController.js";
import { testPage } from "../controllers/testController.js";
import { product } from "../controllers/product.js";

const router = express.Router();

// Pages
router.get("/", homePage);
router.get("/dashboard", dashboardPage);
router.get("/users", usersPage);
router.get("/settings", settingsPage);
router.get("/test", testPage);

// Product API (for Postman)
// Product API (for Postman)
router.get("/api/products", product.all);
router.get("/api/products/:id", product.isa);
router.post("/api/products", product.insert);
router.put("/api/products/:id", product.update);
router.delete("/api/products/:id", product.remove);

export default router;