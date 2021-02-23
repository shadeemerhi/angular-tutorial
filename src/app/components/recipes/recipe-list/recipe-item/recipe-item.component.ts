import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Recipe from '../../../../shared/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
  providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
  }


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    console.log(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
