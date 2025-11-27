import db from "../db";

const getAllCategoriesFromDb = () => {
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

  return result;
};

export { getAllCategoriesFromDb };
