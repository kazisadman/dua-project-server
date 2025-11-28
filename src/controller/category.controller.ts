import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import {
  getAllCategoriesFromDb,
  getCategoryFromDbById,
  getSearchedCategoriesFromDb,
  getSubcategoriesByCategoryIdFromDb,
} from "../service/category.service";
import ErrorHandler from "../utils/ErrorHandler";
import {
  CategoryDTO,
  Category,
  Subcategory,
  SubcategoryDTO,
} from "../types/categoryTypes";

const getAllCategories = asyncHandler((_, res: Response) => {
  const data = getAllCategoriesFromDb();

  if (!data) {
    throw new ErrorHandler(404, "Categories Data not found", false);
  }

  const parsed: CategoryDTO[] = (data as Category[]).map((item) => ({
    ...item,
    subcategories_id: JSON.parse(item.subcategories_id),
    duas_id: JSON.parse(item.duas_id),
  }));

  res.status(200).json(parsed);
});

const getCategoryById = (req: Request, res: Response) => {
  const { id } = req.params;

  const data = getCategoryFromDbById(Number(id));

  if (!data) {
    throw new ErrorHandler(404, `Category Data for ${id} not found`, false);
  }

  const parsed = {
    ...data,
    subcategories_id: JSON.parse(data.subcategories_id),
    duas_id: JSON.parse(data.duas_id),
  };

  res.status(200).json(parsed);
};

const getSubcategoriesByCategoryId = (req: Request, res: Response) => {
  const { id } = req.params;

  const data = getSubcategoriesByCategoryIdFromDb(Number(id));

  if (!data) {
    throw new ErrorHandler(404, `Category Data for ${id} not found`, false);
  }

  const parsed: SubcategoryDTO[] = (data as Subcategory[]).map((item) => ({
    ...item,
    duas_id: JSON.parse(item.duas_id),
  }));

  res.status(200).json(parsed);
};

const getSearchedCategories = (req: Request, res: Response) => {
  const searchTerm = req.query.query || "";

  const data = getSearchedCategoriesFromDb(searchTerm.toString());

  if (!data) {
    throw new ErrorHandler(404, "Categories Data not found", false);
  }

  const parsed: CategoryDTO[] = (data as Category[]).map((item) => ({
    ...item,
    subcategories_id: JSON.parse(item.subcategories_id),
    duas_id: JSON.parse(item.duas_id),
  }));

  res.status(200).json(parsed);
};

export {
  getAllCategories,
  getCategoryById,
  getSubcategoriesByCategoryId,
  getSearchedCategories,
};
