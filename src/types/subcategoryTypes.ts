export interface Subcategory {
  id: number;
  title: string;
  category_id: number;
  category_title: string;
  dua_id: string;
}

export interface SubcategoryDTO extends Omit<Subcategory, "dua_id"> {
  dua_id: number[];
}
