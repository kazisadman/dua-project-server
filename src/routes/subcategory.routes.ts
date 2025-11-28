import { Router } from "express";
import {
  getAllSubcategories,
  getDuasBySubcategoryId,
  getSubcategoryById,
} from "../controller/subcategoy.controller";

const router = Router();

router.get("/", getAllSubcategories);
router.get("/:id", getSubcategoryById);
router.get("/:id/duas", getDuasBySubcategoryId);

export default router;
