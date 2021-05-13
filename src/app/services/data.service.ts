import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCategoryList(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  }

  getIngredientList(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  }

  getDrinks(name:any){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name)
  }

  
  getDrinksByIngredients(ingredient:any){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ingredient)
  }

  getDrinksByCategory(category:any){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+category)
  }
}
