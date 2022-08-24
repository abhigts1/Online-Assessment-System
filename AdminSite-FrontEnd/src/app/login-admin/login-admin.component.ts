import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginAdminService } from '../Services/login-admin.Service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit 
{

  loginFailed : boolean = false;
  loginInfo : LoginModel = new LoginModel();

  constructor(private routerObj : Router, private loginService: LoginAdminService) { }

  ngOnInit(): void
  {
  }

  goToHome()
  {
    this.routerObj.navigate(['/GoToHome']);
  }
 
 loginValidation(loginInfo : LoginModel)
 {
  let UserDTOobj = this.loginService.loginValidation(loginInfo).subscribe(
    data => {
      if(data){
        this.loginFailed = false;
        localStorage.setItem('user', JSON.stringify(data));
        //take me to home page comp
        this.goToHome();
      }else{
        //show that login failed
        this.loginFailed = true;
        loginInfo.adminId = "";
        loginInfo.password = "";
        
        console.log("Error, Login Failed");
      }
    });
 } 

}
