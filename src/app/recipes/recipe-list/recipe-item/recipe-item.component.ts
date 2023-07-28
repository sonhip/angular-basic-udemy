import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../reipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Output() itemSelected = new EventEmitter<void>();

  onSelectedItem() {
    this.itemSelected.emit();
  }
}
