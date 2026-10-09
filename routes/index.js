import express from "express";
import { homePage } from "../controllers/homeController.js";
import { dashboardPage } from "../controllers/dashboardController.js";
import { usersPage } from "../controllers/usersController.js";
import { settingsPage } from "../controllers/settingsController.js";
import { testPage } from "../controllers/testController.js";
import { product } from "../controllers/product.js";
import { activitiesPage } from "../controllers/activitiesController.js";

const router = express.Router();

// LIST OF ALL ACTIVITIES (for checking)
router.get("/activities", activitiesPage);

// ACTIVITY 1 — routes only (recreated; original was /jean on 2026-09-10, logic later moved into jeanController)
router.get("/activity1", (req, res) => {
  res.json({ message: "Welcome to Jean's routes!" });
});

// Pages
// XianFire starter home page (not an activity)
router.get("/", homePage);
// ACTIVITY 5: admin dashboard
router.get("/dashboard", dashboardPage);
// ACTIVITY 5: admin dashboard (same page, clearer URL)
router.get("/admin/dashboard", dashboardPage);
// ACTIVITY 5: admin dashboard - Users page
router.get("/users", usersPage);
// ACTIVITY 5: admin dashboard - Settings page
router.get("/settings", settingsPage);
// EXTRA (2026-10-06, not one of the 5 activities): table with {{#each}}
router.get("/test", testPage);

// Product API (for Postman)
// Product API (for Postman)
// EXTRA (2026-10-06, not one of the 5 activities): Product CRUD with MySQL
router.get("/product", product.index);
router.get("/api/products", product.all);
router.get("/api/products/:id", product.isa);
router.post("/api/products", product.insert);
router.put("/api/products/:id", product.update);
router.delete("/api/products/:id", product.remove);

export default router;
