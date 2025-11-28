-- == == == == == == == == == == == == == == == Category table schema == == == == == == == == == == == == == == == 
-- CREATE TABLE IF NOT EXISTS categories(
--     id INTEGER PRIMARY KEY,
--     category_title TEXT NOT NULL,
--     icon TEXT NOT NULL
-- );
-- == == == == == == == == == == == == == == == Subcategory table schema == == == == == == == == == == == == == == == 
-- CREATE TABLE IF NOT EXISTS subcategories(
--     id INTEGER PRIMARY KEY,
--     title TEXT NOT NULL,
--     Category_id INTEGER NOT NULL,
--     FOREIGN KEY (Category_id) REFERENCES categories(id)
-- );
-- == == == == == == == == == == == == == == == Dua table schema == == == == == == == == == == == == == == == 
-- CREATE TABLE IF NOT EXISTS duas(
--     id INTEGER PRIMARY KEY AUTOINCREMENT DEFAULT 1001,
--     subcategory_id INTEGER NOT NULL,
--     category_id INTEGER NOT NULL,
--     title TEXT NOT NULL,
--     arabic TEXT NOT NULL,
--     description TEXT NOT NULL,
--     translation TEXT NOT NULL,
--     transliteration TEXT NOT NULL,
--     hadith TEXT NOT NULL,
--     ref_no TEXT NOT NULL,
--     FOREIGN KEY(subcategory_id) REFERENCES subcategories(id),
--     FOREIGN KEY(category_id) REFERENCES categories(id)
-- );
SELECT 
    s.id,
     s.title,
     s.category_id,
     JSON_GROUP_ARRAY(d.id) AS duas_id
FROM categories AS c
    LEFT JOIN subcategories AS s ON c.id = s.category_id
    LEFT JOIN duas AS d ON d.subcategory_id = s.id
WHERE c.id = 5
GROUP BY s.id,s.title;
