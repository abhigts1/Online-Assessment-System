import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/LoginModel';
import { LoginService } from '../Service/Login.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed : boolean = false;
  loginInfo : LoginModel = new LoginModel();

  constructor( private loginService: LoginService, private routerObj : Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.routerObj.navigate(['/GoToHome']);
  }
 
 loginValidation(loginInfo : LoginModel){
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
            loginInfo.USN = "";
            loginInfo.password = "";
            
            console.log("Error, Login Failed");
          }
        });
  } 
}
