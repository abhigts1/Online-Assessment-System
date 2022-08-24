import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from '../Models/SubjectModel';
import { ConfirmationDialogService } from '../Service/confirmation-dialog.Service';


@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit 
{

  constructor(private confirmationDialogService: ConfirmationDialogService, private routerObj : Router) { }

  ngOnInit(): void 
  {
  }

  @Input() subjectObj : SubjectModel = new SubjectModel(); //name of the variable which inherits value from the parent component
  

  public openConfirmationDialog() 
  {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to take the quiz ?')
    .then((confirmed) =>{
      if(confirmed){
        this.goToQuestions(this.subjectObj.subjectId);
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  



   goToQuestions(subjectId : number)
  {
    this.routerObj.navigate(['/goToQuestions', subjectId]);
  }

}
