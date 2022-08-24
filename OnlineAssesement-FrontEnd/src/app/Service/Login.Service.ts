import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { LoginModel } from '../Models/LoginModel';
import { UserDTO } from '../Models/UserDTO';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    loginValidation(loginDetails : LoginModel) : Observable<UserDTO> // return type is strictly UserDTO
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.post<UserDTO>(this.APIURL+'/user/Login', loginDetails);
    }
}