import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { QuestionsModel } from '../Models/QuestionsModel';


@Injectable({
  providedIn: 'root'
})

export class QuestionsService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    getSubjectName(subjectId : number)// return type is strictly string
    {
        //Generates HTTP get request link and executes the API func and gets the result
        return this.http.get(this.APIURL+'/user/getSubjectName/' + subjectId,  { responseType: 'text'});
    }

    getAllQuestions(subjectId : number) : Observable<QuestionsModel[]> // return type is strictly ResultModel[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
       return this.http.get<QuestionsModel[]>(this.APIURL+'/user/GetAllQuestionsForASubject/' + subjectId);
    }

    removeQuestion(questionId : number) : Observable<boolean> //Return type is strictly boolean
    {
        return this.http.get<boolean>(this.APIURL + '/user/DeleteQuestion/' + questionId);
    }

}