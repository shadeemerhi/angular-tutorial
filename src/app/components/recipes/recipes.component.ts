import { Component, OnInit } from '@angular/core';
import Recipe from '../../shared/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          console.log(this.selectedRecipe);
          this.selectedRecipe = recipe;
        }
      )

  }

}
