import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './reipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test name',
      'test des',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
    new Recipe(
      'test name',
      'test des',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
  ];
  @Output() onItemWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  handleSelectedItem(item: Recipe) {
    this.onItemWasSelected.emit(item);
  }
}
