import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { QuestionsModel } from '../Models/QuestionsModel';
import { ResultModel } from '../Models/ResultMode';
import { UserModel } from '../Models/UserModel';


@Injectable({
  providedIn: 'root'
})

export class QuestionsService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    getAllQuestions(id : number) : Observable<QuestionsModel[]> // return type is strictly QuestionsMode[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<QuestionsModel[]>(this.APIURL+'/user/GetAllQuestionsForASubject/'+ id);
    }

    insertResult(resultObj : ResultModel) // return type is strictly boolean
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.post<boolean>(this.APIURL+'/user/AddResult', resultObj);
    }

    getUserDetails(USN : string) : Observable<UserModel>
    {
      return this.http.get<UserModel>(this.APIURL+'/user/getUserDetails/' + USN);
    }
}