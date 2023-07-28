import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output() emitOnAddIngedient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameRef!: ElementRef;
  @ViewChild('amountInput') amountRef!: ElementRef;

  onAddIngedient() {
    const itemName = this.nameRef.nativeElement.value;
    const itemAmount = this.amountRef.nativeElement.value;
    if (!itemAmount || !itemAmount) return;
    const newItem = new Ingredient(itemName, itemAmount);
    this.emitOnAddIngedient.emit(newItem);

    // clear input
    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }
}
