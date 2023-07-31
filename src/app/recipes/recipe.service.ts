import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  reicpeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test name',
      'test des',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [new Ingredient('meat', 5), new Ingredient('tomatos', 5)]
    ),
    new Recipe(
      'aaa bbb',
      'xx yy',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [new Ingredient('oil', 5), new Ingredient('apple', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
