import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const notfound = (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandler(404, `${req.originalUrl} not found`, false));
};
