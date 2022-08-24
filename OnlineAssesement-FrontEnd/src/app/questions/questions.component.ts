import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsModel } from '../Models/QuestionsModel';
import { ResultModel } from '../Models/ResultMode';
import { UserModel } from '../Models/UserModel';
import { ConfirmationDialogService } from '../Service/confirmation-dialog.Service';
import { QuestionsService } from '../Service/Questions.Service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit 
{
  subjectId : any = 0;
  allQuestions : QuestionsModel[] = [];
  result : boolean[] = [];
  optionSelected : string[]=[];
  marks : number = 0; //Stores the marks of a quiz session
  userDetails : UserModel = new UserModel();
  resultObj : ResultModel = new ResultModel(); //Need to store -> USN, Username, Subject ID, SubjectName, Score
  usn : string = "";
  timeLeft: number = 5 * 60;
  myInterval : any;
  
  constructor(private route: ActivatedRoute, private QuestionsService : QuestionsService,
    private confirmationDialogService: ConfirmationDialogService,  private routerObj : Router) { }

  ngOnInit(): void {
    //Retrieves USN from the local storage.
    let tk = JSON.parse(localStorage.getItem('user')!);
    this.usn = tk.usn;

    this.subjectId = this.route.snapshot.paramMap.get('subjectId');  //Assigning ID from route to a variable
    this.getAllQuestions();
    this.startTimer();
  }

  ngOnDestroy(){
    clearInterval(this.myInterval);
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.submit();
        clearInterval(this.myInterval);
        this.confirmationDialogService.confirm('Sorry', 'Your Time is Up');
      }
    },1000)
  }

  //Name and return type of API
  getAllQuestions()
  {
    this.QuestionsService.getAllQuestions(this.subjectId).subscribe(
      (data: any) =>{
        this.allQuestions = data;

        if(this.allQuestions.length <= 0){
          this.goToHome();
          this.confirmationDialogService.confirm('Sorry', 'This Test is Unavailable at the moment');
          return;
        }
        this.result = new Array(this.allQuestions.length);
        this.result.fill(false);

        this.optionSelected = new Array(this.allQuestions.length);
        this.optionSelected.fill('');
      }
    );

  }

  //Name and return type of API
  getUserDetails()
  {
    this.QuestionsService.getUserDetails(this.usn).subscribe(
      data =>{
        this.userDetails = data;
      }
    );

      console.log("Should have vals : "); //trial
      console.log(this.userDetails);
  }


  myfunc(optionSelected : string, correctAns : string, index : number){
    console.log(optionSelected);
    if(optionSelected===correctAns)
    {
      this.result[index] = true;
    }
    else
    {
      this.result[index] = false;
    }
  }

  submit()
  {
    let score : number = 0;
    for(let i=0;i<this.allQuestions.length;i++)
    {
      if(this.result[i] == true)
      score++;
    }
    console.log(score);
    this.marks = score;

    if(this.timeLeft > 0){
      this.openConfirmationDialog();
    }else{
      this.insertResult();
    }
  }

  insertResult(){
    this.resultObj.USN = this.usn;
        this.resultObj.username = "";
        this.resultObj.subjectId = +this.subjectId;
        this.resultObj.score = this.marks;
        this.resultObj.subjectName = ""; 

        //Call Service to insert values of the resultObj into the database.
        try{
          this.QuestionsService.insertResult(this.resultObj).subscribe(
            data =>{
              if(data){
                console.log('success');
              }else{
                console.log('fail');
              }
            }
          );
        }catch{
          console.log('exception');
        }

        //Go back to home page.
        this.goToHome();
  }


  public openConfirmationDialog() 
  {
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to submit?')
    .then((confirmed) =>{
      if(confirmed){
        
       this.insertResult();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  goToHome()
  {
    this.routerObj.navigate(['/GoToHome']);
  }

}
