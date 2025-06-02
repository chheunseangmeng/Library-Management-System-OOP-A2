import { Category } from "./models/Category";
import { CategoryType } from "./models/enum/CategoryType";

const category = new Category(1, "Sci-Fi Books", "Science fiction novels", Category.SCIENCE);
console.log(category.createCategory());
console.log(category.getCategoryById(1));
console.log(category.getAllCategories());
category.setCategoryName("Advanced Sci-Fi");
category.setCategoryType(CategoryType.BIOGRAPHY);
console.log(category.updateCategory());
console.log(category.deleteCategory());