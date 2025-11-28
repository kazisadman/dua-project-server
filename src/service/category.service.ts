import db from "../db";
import { Category, Subcategory } from "../types/categoryTypes";

const getAllCategoriesFromDb = (): Category[] | undefined => {
  const sql = `SELECT c.id,
    c.category_title,
    c.icon,
    COUNT(DISTINCT s.id) AS total_subcategories,
    COUNT(DISTINCT d.id) AS total_duas,
    JSON_GROUP_ARRAY(DISTINCT s.id) AS subcategories_id,
    JSON_GROUP_ARRAY(DISTINCT d.id) AS duas_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.category_id = c.id
GROUP BY c.id,
    c.category_title,
    c.icon;`;

  const prepare = db.prepare(sql);

  const result = prepare.all();

  return result as Category[];
};

const getCategoryFromDbById = (id: number): Category | undefined => {
  const sql = `SELECT c.id,
    c.category_title,
    c.icon,
    COUNT(DISTINCT s.id) AS total_subcategories,
    COUNT(DISTINCT d.id) AS total_duas,
    JSON_GROUP_ARRAY(DISTINCT s.id) AS subcategories_id,
    JSON_GROUP_ARRAY(DISTINCT d.id) AS duas_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.category_id = c.id
WHERE c.id = ?
GROUP BY c.id,
    c.category_title,
    c.icon;`;

  const prepare = db.prepare(sql);

  const result = prepare.get(id);

  return result as Category;
};

const getSubcategoriesByCategoryIdFromDb = (
  id: number
): Subcategory[] | undefined => {
  const sql = `SELECT 
    s.id,
     s.title,
     s.category_id,
     JSON_GROUP_ARRAY(d.id) AS duas_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.subcategory_id = s.id
WHERE c.id = ?
GROUP BY s.id,s.title;
`;

  const prepare = db.prepare(sql);

  const result = prepare.all(id);

  return result as Subcategory[];
};

const getSearchedCategoriesFromDb = (query: string) => {
  const sql = `
  SELECT c.id,
    c.category_title,
    c.icon,
    COUNT(DISTINCT s.id) AS total_subcategories,
    COUNT(DISTINCT d.id) AS total_duas,
    JSON_GROUP_ARRAY(DISTINCT s.id) AS subcategories_id,
    JSON_GROUP_ARRAY(DISTINCT d.id) AS duas_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.category_id = c.id
WHERE c.category_title LIKE ?
GROUP BY c.id,
    c.category_title,
    c.icon;
  `;
  const prepare = db.prepare(sql);
  const result = prepare.all(`%${query}%`);

  return result;
};

export {
  getAllCategoriesFromDb,
  getCategoryFromDbById,
  getSubcategoriesByCategoryIdFromDb,
  getSearchedCategoriesFromDb,
};
