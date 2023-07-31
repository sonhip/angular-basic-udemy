import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('onion', 1),
    new Ingredient('apple', 5),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getListIngredient() {
    return this.ingredients.slice();
  }
  addNewIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientToShopping(list: Ingredient[]) {
    // this.ingredients = [...this.ingredients, ...list];
    this.ingredients.push(...list);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
