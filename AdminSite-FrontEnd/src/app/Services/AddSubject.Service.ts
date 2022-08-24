import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { SubjectModel } from '../Models/SubjectModel';



@Injectable({
  providedIn: 'root'
})

export class AddSubjectService 
{

    APIURL : string = 'https://localhost:44306/api';

    constructor(private http: HttpClient) { }

    addSubject(subjectName: string) : Observable<boolean>
    {
        //Generates HTTP get request link and executes the API func and gets the result
        return this.http.get<boolean>(this.APIURL+'/user/AddSubject/' + subjectName);
    }
}