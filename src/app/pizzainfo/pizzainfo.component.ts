import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizzainfo',
  templateUrl: './pizzainfo.component.html',
  styleUrls: ['./pizzainfo.component.css']
})
export class PizzaInfo implements OnInit {

  pizzas:PizzasService;

  arr:any;

  constructor(pizza1:PizzasService) {
    this.pizzas=pizza1;
    this.arr=this.pizzas.selectedPizza;
    
   }

  




   


  ngOnInit(): void {


  }

}