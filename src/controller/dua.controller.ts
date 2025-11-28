import { Request, Response } from "express";
import { getAllDuasFromDb, getDuaByIdFromDb } from "../service/dua.service";
import asyncHandler from "../utils/asyncHandler";
import ErrorHandler from "../utils/ErrorHandler";

const getAllDuas = asyncHandler((_, res: Response) => {
  const data = getAllDuasFromDb();

  if (!data) {
    throw new ErrorHandler(404, "Subcategories data not fount", false);
  }

  res.status(200).json(data);
});

const getDuaById = asyncHandler((req: Request, res: Response) => {
  const { id } = req.params;

  const data = getDuaByIdFromDb(Number(id));

  if (!data) {
    throw new ErrorHandler(
      404,
      `Dua data for id ${id} not found`,
      false
    );
  }

  res.status(200).json(data);
});

export { getAllDuas,getDuaById };
