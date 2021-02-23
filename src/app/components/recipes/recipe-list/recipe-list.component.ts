import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OutgoingMessage } from 'http';
import Recipe from '../../../shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }

}
