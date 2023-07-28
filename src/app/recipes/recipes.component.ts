import { Component, Input } from '@angular/core';
import { Recipe } from './recipe-list/reipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  itemRecipe!: Recipe;

  onRecipeSelected(item: Recipe) {
    this.itemRecipe = item;
  }
}
