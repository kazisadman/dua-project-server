import { Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { getAllCategoriesFromDb } from "../service/category.service";
import ErrorHandler from "../utils/ErrorHandler";

interface Data {
  id: number;
  category_title: string;
  total_subcategories: number;
  total_duas: number;
  subcategories_id: string;
  duas_id: string;
}

interface ParsedData extends Omit<Data, "subcategories_id" | "duas_id"> {
  subcategories_id: number[];
  duas_id: number[];
}

const getAllCategories = asyncHandler((_, res: Response) => {
  const data = getAllCategoriesFromDb();

  if (!data) {
    throw new ErrorHandler(404, "Categories Data not found", false);
  }

  const parsed: ParsedData[] = (data as Data[]).map((item) => ({
    ...item,
    subcategories_id: JSON.parse(item.subcategories_id),
    duas_id: JSON.parse(item.duas_id),
  }));

  res
    .status(200)
    .json(parsed);
});

export { getAllCategories };
