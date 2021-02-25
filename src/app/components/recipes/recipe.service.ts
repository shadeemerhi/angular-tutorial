import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Recipe from '../../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  recipeChanged = new Subject<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'Pasta',
      description: 'This pasta will change your life',
      imagePath: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      ingredients: [
        {name: 'Noodles', amount: 20 },
        {name: 'Tomato Sauce', amount: 2 },
      ]
    },
    {
      name: 'Big Fat Burger',
      description: 'The best burger in town',
      imagePath: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
      ingredients: [
        { name: 'Meat', amount: 1 },
        { name: 'Buns', amount: 2 },
        { name: 'Cheese', amount: 1 },
      ]
    }
  ];

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  selectRecipe(recipe: Recipe) {
    this.recipeChanged.next({...recipe});
  }
}
