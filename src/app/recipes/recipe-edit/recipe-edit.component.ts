import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id!: number;
  editMode: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(
        '🚀 ~ file: recipe-edit.component.ts:17 ~ RecipeEditComponent ~ this.route.params.subscribe ~ this.id:',
        params['id']
      );
      this.editMode = !!params['id'];
      console.log(
        '🚀 ~ file: recipe-edit.component.ts:18 ~ RecipeEditComponent ~ this.route.params.subscribe ~ this.editMode:',
        this.editMode
      );
    });
  }
}
