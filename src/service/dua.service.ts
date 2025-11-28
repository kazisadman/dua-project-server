import db from "../db";
import { dua } from "../types/duaTypes";

const getAllDuasFromDb = (): dua[] | undefined => {
  const sql = `
  SELECT * FROM duas;
`;

  const prepare = db.prepare(sql);

  const result = prepare.all();

  return result as dua[];
};

const getDuaByIdFromDb = (id: number): dua | undefined => {
  const sql = `
SELECT * FROM duas
WHERE id = ?;
`;

  const prepare = db.prepare(sql);

  const result = prepare.get(id);

  return result as dua;
};

export { getAllDuasFromDb, getDuaByIdFromDb };
