export interface Category {
  id: number;
  category_title: string;
  total_subcategories: number;
  total_duas: number;
  subcategories_id: string;
  duas_id: string;
}

export interface CategoryDTO
  extends Omit<Category, "subcategories_id" | "duas_id"> {
  subcategories_id: number[];
  duas_id: number[];
}

export interface Subcategory {
  id: number;
  title: string;
  category_id: number;
  duas_id: string;
}

export interface SubcategoryDTO extends Omit<Subcategory, "duas_id"> {
  duas_id: number[];
}
