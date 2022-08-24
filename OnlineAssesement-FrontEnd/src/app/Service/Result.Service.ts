// getAllResultsForAUSN(string USN)

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from '../Models/ResultMode';

@Injectable({
  providedIn: 'root'
})

export class Result 
{
    APIURL : string = 'https://localhost:44306/api';
    constructor(private http: HttpClient) { }

    //We do not need any paramters, as we will take the USN from the token.
    getAllResultsForAUSN() : Observable<ResultModel[]> //Return type of API
    {
      let tk = JSON.parse(localStorage.getItem('user')!);

        return this.http.get<ResultModel[]>(this.APIURL + '/user/GetAllResultsForAUSN/' + tk.usn,
        {
            headers : new HttpHeaders({
              'Authorization' : 'Bearer ' + tk.token,
            }),
        });
    }

   
    
}
