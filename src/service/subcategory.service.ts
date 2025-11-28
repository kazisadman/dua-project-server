import db from "../db";
import { dua } from "../types/duaTypes";
import { Subcategory } from "../types/subcategoryTypes";

const getAllSubcategoriesFromDb = (): Subcategory[] | undefined => {
  const sql = `
  SELECT 
    s.id,
     s.title,
     s.category_id,
     c.category_title as category_title,
     JSON_GROUP_ARRAY(d.id) AS dua_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.subcategory_id = s.id
GROUP BY s.id,s.title;
`;

  const prepare = db.prepare(sql);

  const result = prepare.all();

  return result as Subcategory[];
};

const getDuasBySubCategoryIdFromDb = (id:number) => {
  const sql = `
  SELECT
    d.*
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.subcategory_id = s.id
WHERE s.id = ?;
`;

  const prepare = db.prepare(sql);

  const result = prepare.all(id);

  return result as dua[];
};

const getSubcategoryByIdFromDb = (id: number): Subcategory | undefined => {
  const sql = `
  SELECT 
    s.id,
     s.title,
     s.category_id,
     c.category_title as category_title,
     JSON_GROUP_ARRAY(d.id) AS dua_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.subcategory_id = s.id
WHERE s.id = ?
GROUP BY s.id,s.title;
`;

  const prepare = db.prepare(sql);

  const result = prepare.get(id);

  return result as Subcategory;
};



export { getAllSubcategoriesFromDb, getSubcategoryByIdFromDb,getDuasBySubCategoryIdFromDb };
