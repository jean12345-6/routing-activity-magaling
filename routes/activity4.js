// ACTIVITY 4 — restored from VS Code Local History, 2026-09-15
// (original: routes/products.js saved 2026-09-15 09:45:42, duplicate "/" route removed)
import express from "express";
import { activity4Controller } from "../controllers/activity4Controller.js";

const router = express.Router();

// ACTIVITY 4: route + controller + view (res.render with views/test.xian)
router.get("/", activity4Controller.intro);
// ACTIVITY 4: route + controller + param + view (req.params.id shown in views/test.xian)
router.get("/:id", activity4Controller.getOne);

export default router;
