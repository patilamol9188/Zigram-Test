import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-drinksbycategory',
  templateUrl: './drinksbycategory.component.html',
  styleUrls: ['./drinksbycategory.component.css']
})
export class DrinksbycategoryComponent implements OnInit {
  categories:any=[];
  category: string = 'Ordinary Drink';
  drinks:any = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getCategoryList().subscribe((res:any)=>{
      this.categories = res.drinks;
      this.getDrinksDataByCategory();
    },(error)=>{
      console.log("Something went wrong");
    })
  }

  getDrinksDataByCategory(){
    this.dataService.getDrinksByCategory(this.category).subscribe((res:any)=>{
      this.drinks = res.drinks;
    })

  }

}
