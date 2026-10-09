import express from "express";
import { productsController } from "../controllers/productsController.js";

const router = express.Router();

// ACTIVITY 5: admin dashboard - Products page (views/products.xian)
router.get("/", productsController.intro);
// EXTRA PRACTICE (2026-09-15): route + controller + param (req.params.id)
router.get("/:id", productsController.getOne);
// NOTE: same as the first "/" route above, so this line never runs
router.get("/", productsController.intro);

export default router;
