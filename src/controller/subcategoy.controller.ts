import { Response, Request } from "express";
import {
  getAllSubcategoriesFromDb,
  getDuasBySubCategoryIdFromDb,
  getSubcategoryByIdFromDb,
} from "../service/subcategory.service";
import asyncHandler from "../utils/asyncHandler";
import ErrorHandler from "../utils/ErrorHandler";
import { Subcategory, SubcategoryDTO } from "../types/subcategoryTypes";

const getAllSubcategories = asyncHandler((_, res: Response) => {
  const data = getAllSubcategoriesFromDb();

  if (!data) {
    throw new ErrorHandler(404, "Subcategories data not fount", false);
  }

  const parsedData: SubcategoryDTO[] = (data as Subcategory[]).map((item) => ({
    ...item,
    dua_id: JSON.parse(item.dua_id),
  }));

  res.status(200).json(parsedData);
});

const getDuasBySubcategoryId = asyncHandler((req: Request, res: Response) => {
  const { id } = req.params;

  const data = getDuasBySubCategoryIdFromDb(Number(id));

  if (!data || data.length < 1) {
    throw new ErrorHandler(
      404,
      `Dua data for subcategory ${id} not found`,
      false
    );
  }

  res.status(200).json(data);
});

const getSubcategoryById = (req: Request, res: Response) => {
  const { id } = req.params;

  const data = getSubcategoryByIdFromDb(Number(id));

  if (!data) {
    throw new ErrorHandler(404, `Subcategory Data for ${id} not found`, false);
  }

  const parsed: SubcategoryDTO = {
    ...data,
    dua_id: JSON.parse(data.dua_id),
  };

  res.status(200).json(parsed);
};

export { getAllSubcategories, getSubcategoryById, getDuasBySubcategoryId };
