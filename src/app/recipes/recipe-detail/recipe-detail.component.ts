import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() itemRecipe!: Recipe;

  constructor(private ssl: ShoppingListService) {}

  onAddToShoppingList() {
    this.ssl.addIngredientToShopping(this.itemRecipe.ingredients);
  }
}
