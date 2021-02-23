import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Recipe from '../../../../shared/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  // providers: [RecipeService]
})


export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
  }
  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter();
  // recipeSelected = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipeSelected.emit(this.recipe);
    this.recipeService.selectRecipe(this.recipe);
    // this.recipeService.selectRecipe(this.recipe);
    // this.recipeService.selectRecipe
  }
}
