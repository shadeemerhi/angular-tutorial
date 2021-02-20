import { Component, OnInit } from '@angular/core';
import Recipe from '../../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = {
    name: '',
    description: '',
    imagePath: ''
  }

  constructor() { }



  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipe = recipe;
  }

}
