import express from "express";
import { getAllCategories } from "../controller/category.controller";

const router = express.Router();

router.get("/categories", getAllCategories);

export default router;
