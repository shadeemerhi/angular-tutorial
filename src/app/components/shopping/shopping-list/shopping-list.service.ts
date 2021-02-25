import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import Ingredient from '../../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5
    },
    {
      name: 'Tomatoes',
      amount: 10
    }
  ]

  constructor() { }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return [...this.ingredients];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addRecipeItemsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

}
