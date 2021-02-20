import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() createNewIngredient: EventEmitter<Ingredient> = new EventEmitter();

  ingredientName: string | null = null;
  ingredientAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    if (!this.ingredientName || !this.ingredientAmount) return;
    const newIngredient: Ingredient = {
      name: this.ingredientName,
      amount: this.ingredientAmount
    }
    this.ingredientAmount = 0;
    this.ingredientName = '';
    this.createNewIngredient.emit(newIngredient);
  }

}
