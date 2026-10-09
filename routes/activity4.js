import express from "express";
import { activity4Controller } from "../controllers/activity4Controller.js";

const router = express.Router();

router.get("/", activity4Controller.intro);
router.get("/:id", activity4Controller.getOne);

export default router;
