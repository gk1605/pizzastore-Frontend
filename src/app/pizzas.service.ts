import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';



@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  selectedPizza:any;
  rootEndpoint:string='http://localhost:8080/vegetable/'
  AllPizzasEndPoint:string = this.rootEndpoint+'allpizza';
  FilterEndpoint:string='http://localhost:8080/pizza/pizzafromHtoL';
  private http:HttpClient;

  
  pizzas:any[]=[];
  
  constructor( http1:HttpClient) {
    this.http=http1
   
    
   }
      
  getAllpizzas():Observable<any>{
    return this.http.get<any>(`${this.AllPizzasEndPoint}`);

  }
  
  getAll():Observable<Pizza>
  {
    return this.http.get<Pizza>(`${this.AllPizzasEndPoint}`);
  }

  receivepizzas(obj:any){
    this.selectedPizza=obj;
  }
  cartpizza(obj:any){
    this.pizzas.push(obj);

  }
  getfilter():Observable<any>{
    return this.http.get<any>(`${this.FilterEndpoint}`);

  }
  
 
 
}