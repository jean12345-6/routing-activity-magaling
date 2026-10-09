import express from "express";
import { jeanController } from "../controllers/jeanController.js";

const router = express.Router();

router.get("/", jeanController.intro);

router.get("/search/query", jeanController.search);

router.get("/about", jeanController.about);

router.post("/submit", jeanController.submit);

router.get("/:id", jeanController.getById);

export default router;