import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Loginresponse } from '../loginresponse';
import { AppService } from '../appservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit {
  display:string=""
  homeEndpoint:string="home";
  registerEndpoint:string="http:/localhost:8080/pizzas/user/Registration";
  errorResponse:any;
  constructor(private router:Router,private service:AppService) { }
  data:Login = new Login('','');
  responseStatus:Loginresponse=<Loginresponse>{}
  openForm(){
     this.display="block";
  }
  closeForm(){
    this.display="none";
  }
  formSubmit(){
    this.data.saveData(this.data);
    console.log(this.data);
    this.service.doLoginAction(this.data).subscribe((data)=>{
      this.responseStatus=data;
      if(this.responseStatus.username != 'invalid'){
        this.router.navigate([`${this.homeEndpoint}`]);
      }
     
    }
    ,
    error=>{
      this.errorResponse=error;
      alert(this.errorResponse.error.errorMsg + "PLEASE REGISTER");
      this.router.navigate([`${this.registerEndpoint}`]);
    }
    );

  }
  ngOnInit(): void {
  }

}