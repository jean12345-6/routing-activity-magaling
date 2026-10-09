import express from "express";
import { jeanController } from "../controllers/jeanController.js";

const router = express.Router();

// ACTIVITY 2: route + controller
router.get("/", jeanController.intro);

// ACTIVITY 2: route + controller (uses req.query, e.g. /jean/search/query?q=shoes)
router.get("/search/query", jeanController.search);

// ACTIVITY 2: route + controller
router.get("/about", jeanController.about);

// ACTIVITY 2: route + controller (POST, uses req.body)
router.post("/submit", jeanController.submit);

// ACTIVITY 3: route + controller + param (req.params.id)
router.get("/:id", jeanController.getById);

export default router;
