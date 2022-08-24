import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { UserModel } from '../Models/UserModel';


@Injectable({
  providedIn: 'root'
})

export class updateUserService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    viewUser(USN : string) : Observable<UserModel> // return type is strictly QuestionsMode[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<UserModel>(this.APIURL+'/user/ViewUser/'+ USN);
    }

    updateUser(USN : string, userObj : UserModel) : Observable<boolean> //return type is strictly boolean
    {
      //Generates HTTP post request link and executes the API func and gets the result
      return this.http.post<boolean>(this.APIURL+'/user/UpdateUser/'+ USN, userObj);
    }

    addUser(userObj : UserModel) : Observable<boolean>
    {
        //Generates HTTP post request link and executes the API func and gets the result
        return this.http.post<boolean>(this.APIURL+'/user/addUserDetails/', userObj);
    }
}