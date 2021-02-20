import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Recipe from '../../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelect: EventEmitter<void> = new EventEmitter();
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipeSelect.emit();
  }
}
