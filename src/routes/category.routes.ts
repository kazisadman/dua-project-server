import express from "express";
import {
  getAllCategories,
  getCategoryById,
  getSubcategoriesByCategoryId,
} from "../controller/category.controller";

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.get("/categories/:id/subcategories", getSubcategoriesByCategoryId);

export default router;
