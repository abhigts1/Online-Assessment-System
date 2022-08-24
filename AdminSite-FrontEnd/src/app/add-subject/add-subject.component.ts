import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectModel } from '../Models/SubjectModel';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';
import { AddSubjectService } from '../Services/AddSubject.Service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private addSubjectService  : AddSubjectService , 
    private confirmationDialogService: ConfirmationDialogService, private routerObj : Router) { }

  subjectName : string = "";
  
  ngOnInit(): void 
  {
    
  }

  addSubject()
  {
    this.addSubjectService.addSubject(this.subjectName).subscribe(
      data =>{

        if(data)
        {
          this.confirmationDialogService.confirm('Note: ', 'Subject Added Successfully!')
          .then((confirmed) =>{

            //Take me back to HomePage
            this.goToSubject();
          });
        }
        else
        {
          this.confirmationDialogService.confirm('Error: ', 'Subject not added!')
          .then((confirmed) =>{
          });
        }
      }
    );

    // console.log(this.userInfo);
  }

  goToSubject()
  {
    this.routerObj.navigate(['/GoToSubject']);
  }
}
