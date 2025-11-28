import { Router } from "express";
import { getAllDuas, getDuaById } from "../controller/dua.controller";

const router = Router();

router.get("/", getAllDuas);
router.get("/:id", getDuaById);

export default router;
