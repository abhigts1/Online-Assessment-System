import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { SubjectModel } from '../Models/SubjectModel';


@Injectable({
  providedIn: 'root'
})

export class SubjectService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    getAllSubjects() : Observable<SubjectModel[]> // return type is strictly SubjectModel[]
    {
        //Generates HTTP get request link and executes the API func and gets the result
        return this.http.get<SubjectModel[]>(this.APIURL+'/user/GetAllSubjects');
    }

    removeSubject(subjectId : number) : Observable<boolean> //Return type is strictly boolean
    {
        return this.http.get<boolean>(this.APIURL + '/user/DeleteSubjectID/' + subjectId);
    }

}