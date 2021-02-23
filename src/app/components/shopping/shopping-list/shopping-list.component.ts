import { Component, Input, OnInit } from '@angular/core';
import Ingredient from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   {
  //     name: 'Apples',
  //     amount: 5
  //   },
  //   {
  //     name: 'Tomatoes',
  //     amount: 10
  //   }
  // ]

  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }

  // createNewIngredient(newIngredient: Ingredient) {
  //   this.ingredients.push(newIngredient);
  // }

}
