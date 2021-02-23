import { Injectable, EventEmitter } from '@angular/core';
import Recipe from '../../shared/recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'A Test Recipe Description',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    },
    {
      name: 'Yum Stuff',
      description: 'Yum stuff is really yummy',
      imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    }
  ];

  // constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

}
