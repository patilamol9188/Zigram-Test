import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component'
import { DrinksbycategoryComponent } from './drinksbycategory/drinksbycategory.component';
import { DrinksbyingredientComponent } from './drinksbyingredient/drinksbyingredient.component';

const routes: Routes = [
  { path: 'drinklist', component: DrinksComponent },
  { path: 'drinksbycategory', component: DrinksbycategoryComponent },
  { path: 'drinksbyingredient', component: DrinksbyingredientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
