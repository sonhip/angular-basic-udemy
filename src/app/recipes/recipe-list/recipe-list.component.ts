import { RecipeService } from './../recipe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
