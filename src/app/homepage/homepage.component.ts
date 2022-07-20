import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { PizzasService } from '../Pizzas.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { __param } from 'tslib';
import {Pizza} from '../Pizza';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  count:number=0;
  @Output() countEvent = new EventEmitter<number>();
  service:PizzasService;
  cart:CartService;
  router:Router
  root:string="productInfo";
  arr:any[]=[];
  arr1:any[]=[];
  ps: any;
  Piz:Pizza[]=[];
  service1: any;
  searchtext:any;

  
  constructor( service1:PizzasService,cart1:CartService,router1:Router,private route:ActivatedRoute) { 
      this.service=service1;
      this.cart = cart1;
      this.router=router1;
      this.route=route;
  }

  sendNumber(name:string,value:string,event:any){
    this.count++
    this.countEvent.emit(this.count);
   this.cart.changeValue(this.count,name);
    this.router.navigate([`${value}`]);
    event.target.disabled=true;
     this.arr.forEach(a=>{
       if(a.pizzaName==name){
         console.log(a);
        this.service.cartpizza(a);

       }
     });

    
    
  }
  getPizzas(){
    this.service.getAllpizzas().subscribe(data=>{
      console.log(data);
      this.arr=data;
      this.arr1=data;
   
      console.log(this.arr);
      
    },error=>{
        console.log(error);
    });
    

}

sendpizza(name:any){
  this.arr.forEach(a=>{
    if(name==a.pizzaName){
      this.service.receivepizzas(a);
      console.log(name);
    }
  });
  this.router.navigate([`${this.root}`]);
  
 


}
sendpizza1(name:string){
  this.arr.forEach(a=>{
    if(name==a.name){
      this.service.getfilter();
    }
  });
  this.router.navigate([`${this.root}`]);
}



  

  ngOnInit(): void {
    this.getPizzas();
   


  }

  
}