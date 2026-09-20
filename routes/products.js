import express from "express";
import { productsController } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", productsController.intro);
router.get("/:id", productsController.getOne);
router.get("/", productsController.intro);

export default router;