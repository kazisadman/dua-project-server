import { Router } from "express";
import {
  getAllSubcategories,
  getDuasBySubcategoryId,
  getSubcategoryById,
} from "../controller/subcategoy.controller";

const router = Router();

router.get("/subcategories", getAllSubcategories);
router.get("/subcategories/:id", getSubcategoryById);
router.get("/subcategories/:id/duas", getDuasBySubcategoryId);

export default router;
