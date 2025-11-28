import express from "express";
import {
  getAllCategories,
  getCategoryById,
  getSearchedCategories,
  getSubcategoriesByCategoryId,
} from "../controller/category.controller";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/search", getSearchedCategories);
router.get("/:id", getCategoryById);
router.get("/:id/subcategories", getSubcategoriesByCategoryId);

export default router;
