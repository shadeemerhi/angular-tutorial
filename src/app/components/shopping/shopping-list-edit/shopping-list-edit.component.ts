import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  ingredientName: string | null = null;
  ingredientAmount: number = 0;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    if (!this.ingredientName || this.ingredientAmount <= 0) return;
    const newIngredient: Ingredient = {
      name: this.ingredientName,
      amount: this.ingredientAmount
    }
    this.slService.addIngredient(newIngredient);
    this.ingredientAmount = 0;
    this.ingredientName = '';
  }

}
