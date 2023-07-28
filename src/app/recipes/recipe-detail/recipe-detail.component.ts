import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/reipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() itemRecipe!: Recipe;
}
