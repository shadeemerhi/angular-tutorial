import { Component, OnInit, Input } from '@angular/core';
import Recipe from 'src/app/shared/recipe.model';
import { ShoppingListService } from '../../shopping/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: []
  }

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.slService.addRecipeItemsToShoppingList(this.recipe.ingredients);
  }
}
