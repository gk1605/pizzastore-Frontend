import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';

import { MainPageComponent } from './mainpage/mainpage.component';
import { HomePageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { InfoPipe } from './info.pipe';
import {PizzaInfo } from './pizzainfo/pizzainfo.component';

import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SearchPipe } from './search.pipe';






const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'cart',component:CartComponent},
  {path:'pizzaInfo',component:PizzaInfo},
  {path:'Register',component:RegistrationComponent},
 
  
  {path:'**',component:MainPageComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    Header,
    MainPageComponent,
    HomePageComponent,
    CartComponent,
    InfoPipe,
    PizzaInfo,
    RegistrationComponent,
    SearchPipe
   

  
  
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [HomePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }