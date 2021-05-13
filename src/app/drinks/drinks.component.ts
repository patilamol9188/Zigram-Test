import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service' 

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  name = 'margarita';
  drinks:any =[];
  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getDrinksData();
  }

  getDrinksData(){
    this.dataService.getDrinks(this.name).subscribe((res:any)=>{
      this.drinks = res.drinks;
    },(error)=>{
      console.log(error)
    })
  }

}
