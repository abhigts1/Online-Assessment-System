import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { ResultModel } from '../Models/ResultModel';


@Injectable({
  providedIn: 'root'
})

export class ResultService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    getAllResults() : Observable<ResultModel[]> // return type is strictly ResultModel[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<ResultModel[]>(this.APIURL+'/user/ViewResults');
    }
}