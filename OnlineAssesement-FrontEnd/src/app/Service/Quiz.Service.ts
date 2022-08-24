import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectModel } from '../Models/SubjectModel';

@Injectable({
  providedIn: 'root'
})

export class Quiz 
{
    APIURL : string = 'https://localhost:44306/api';
    constructor(private http: HttpClient) { }

    //Same name, paramters() as that of API
    getSubject() : Observable<SubjectModel[]> //Return type of API
    {
      let token = JSON.parse(localStorage.getItem('user')!);
        return this.http.get<SubjectModel[]>(this.APIURL + '/user/GetAllSubjects',
        {
            headers : new HttpHeaders({
              'Authorization' : 'Bearer ' + token.token,
            }),
        });
    }
    
}
