import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { UserModel } from '../Models/UserModel';


@Injectable({
  providedIn: 'root'
})

export class UserService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    getAllUsers() : Observable<UserModel[]> // return type is strictly QuestionsMode[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<UserModel[]>(this.APIURL+'/user/ViewUserDetails');
    }

    removeUser(usn : string) : Observable<boolean> //Return type is strictly boolean
    {
        return this.http.get<boolean>(this.APIURL + '/user/DeleteUSN/' + usn);
    }

}