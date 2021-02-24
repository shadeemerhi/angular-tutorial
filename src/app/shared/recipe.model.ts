import Ingredient from "./ingredient.model";

export default interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}


