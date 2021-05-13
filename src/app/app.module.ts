import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksbycategoryComponent } from './drinksbycategory/drinksbycategory.component';
import { DrinksbyingredientComponent } from './drinksbyingredient/drinksbyingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinksbycategoryComponent,
    DrinksbyingredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
