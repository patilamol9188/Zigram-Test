import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drinksbyingredient',
  templateUrl: './drinksbyingredient.component.html',
  styleUrls: ['./drinksbyingredient.component.css']
})
export class DrinksbyingredientComponent implements OnInit {
  ingredients:any=[];
  ingredient: string = 'Light rum';
  drinks:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getIngredientList().subscribe((res:any)=>{
      this.ingredients = res.drinks;
      this.getDrinksDataByIngredient();
    },(error)=>{
      console.log("Something went wrong");
    })
  }

  getDrinksDataByIngredient(){
    this.dataService.getDrinksByIngredients(this.ingredient).subscribe((res:any)=>{
      this.drinks = res.drinks;
    },(error)=>{
      console.log("Something went wrong");
    })

  }

}
