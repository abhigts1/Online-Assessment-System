import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../Models/SubjectModel';
import { Quiz } from '../Service/Quiz.Service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit 
{

  subjects : SubjectModel[] = [];

  constructor( private QuizService : Quiz) { }

  ngOnInit(): void 
  {
    this.getSubject();
  }

  //Name and return type of API
  getSubject()
  {
    this.QuizService.getSubject().subscribe(
      data =>{
        this.subjects = data;
      }
    );
  }
}
