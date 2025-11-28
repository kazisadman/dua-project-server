import express, { Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import categoryRoutes from "./routes/category.routes";
import subcategoyRoutes from "./routes/subcategory.routes";
import duaRoutes from "./routes/dua.routes";
import { notfound } from "./middlewares/notFound";

const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.get("/api", (_, res: Response) => {
  res.send("hello world");
});

app.use(notfound);

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/subcategories", subcategoyRoutes);
app.use("/api/v1/duas", duaRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
