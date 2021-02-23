import { Component, OnInit } from '@angular/core';
import Recipe from '../../shared/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  // providers: [RecipeService]s
})
export class RecipesComponent implements OnInit {

  selectedRecipe: any | null = null;

  // subscription: Subscription;


  constructor(private recipeService: RecipeService) {
    // this.subscription = this.recipeService.getSelectedRecipe().subscribe(recipe => {
    //   console.log(recipe);
    //   this.selectedRecipe = recipe;
    // })
  }

  ngOnInit() {
    this.recipeService.recipeChanged
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe
      })
  }

}
