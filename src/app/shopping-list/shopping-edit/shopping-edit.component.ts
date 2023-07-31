import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef!: ElementRef;
  @ViewChild('amountInput') amountRef!: ElementRef;

  constructor(private slS: ShoppingListService) {}

  onAddIngedient() {
    const itemName = this.nameRef.nativeElement.value;
    const itemAmount = this.amountRef.nativeElement.value;
    if (!itemAmount || !itemAmount) return;
    const newItem = new Ingredient(itemName, itemAmount);

    this.slS.addNewIngredient(newItem);

    // clear input
    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }
}
