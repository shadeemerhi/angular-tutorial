import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Recipe from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelect: EventEmitter<Recipe> = new EventEmitter();

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
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelect(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }

}
