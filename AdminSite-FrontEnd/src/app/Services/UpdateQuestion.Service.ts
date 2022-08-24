import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { UserModel } from '../Models/UserModel';
import { QuestionsModel } from '../Models/QuestionsModel';


@Injectable({
  providedIn: 'root'
})

export class updateQuestionService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    viewQuestion(questionId : number) : Observable<QuestionsModel> // return type is strictly QuestionsMode[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<QuestionsModel>(this.APIURL+'/user/GetRowForAQuestionID/'+ questionId);
    }

    updateQuestion(questionId : number, questionObj : QuestionsModel) : Observable<boolean> //return type is strictly boolean
    {
      //Generates HTTP post request link and executes the API func and gets the result
      return this.http.post<boolean>(this.APIURL+'/user/UpdateQuestion/'+ questionId, questionObj);
    }

    addQuestion(questionObj : QuestionsModel) : Observable<boolean>
    {
        //Generates HTTP post request link and executes the API func and gets the result
        return this.http.post<boolean>(this.APIURL+'/user/AddQuestion/', questionObj);
    }
}