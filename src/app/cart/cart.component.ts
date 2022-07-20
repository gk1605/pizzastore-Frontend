import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
   service:CartService
   num:number;
  
   pizzaService:PizzasService;
   pizza:any[]=[];
   


 

  constructor(service1:CartService,service2:PizzasService) { 
    this.pizzaService=service2;
    this.service=service1;
    this.num = this.service.value;
    this.pizza=this.pizzaService.pizzas;
    console.log(this.pizza);
    

   
   
  }


  


  ngOnInit(): void {
  
  }
 
}
