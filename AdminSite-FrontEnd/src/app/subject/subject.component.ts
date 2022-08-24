import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../Models/SubjectModel';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';
import { SubjectService } from '../Services/Subject.Service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private SubjectService : SubjectService, 
    private confirmationDialogService: ConfirmationDialogService,
    private routerObj : Router) { }

  p: number = 1;
  count: number = 10;

  allSubjects : SubjectModel[] = [];
  //displayEdit : boolean = false;

  ngOnInit(): void {
    this.getAllSubjects()
  }

  goToAddSubject()
  {
    this.routerObj.navigate(['/GoToAddSubject']);
  }


  getAllSubjects()
  {
    this.SubjectService.getAllSubjects().subscribe(
      data =>{

        this.allSubjects = data;   
      }
    );
  }

  displayEdit(subjectId : number)
  {
    this.routerObj.navigate(['/goToQuestions', subjectId]);
  }

  deleteRow(subjectId : number)
  {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete subject ' + subjectId + "?")
    .then((confirmed) =>{
      if(confirmed)
      {
         this.SubjectService.removeSubject(subjectId).subscribe(data => {
           console.log(data);
           this.getAllSubjects();
           }
         )
      }

    });
  }

}
