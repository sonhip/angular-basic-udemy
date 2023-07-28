import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('onion', 1),
    new Ingredient('apple', 5),
  ];
  handleAddNewGradient(i: Ingredient) {
    this.ingredients.push(i);
  }
}
