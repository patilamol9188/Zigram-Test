import { Component } from '@angular/core';
import { DataService } from './services/data.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'margarita';
  category = 'Cocktail';
  ingredients = 'vodka';
  drinks:any =[];
  constructor(private dataService:DataService){

  }

  ngOnInit(){
    //this.getDrinksData();
    //this.getDrinksDataByCategory();
    //this.getDrinksDataByIngredients();
  }


  

  getDrinksDataByIngredients(){

  }
  
}
