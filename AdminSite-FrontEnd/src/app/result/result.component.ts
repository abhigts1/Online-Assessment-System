import { Component, OnInit } from '@angular/core';
import { ResultModel } from '../Models/ResultModel';
import { ResultService } from '../Services/Result.Service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  p: number = 1;
  count: number = 10;

  allResults : ResultModel[] = [];
  
  constructor(private ResultService : ResultService) { }

  ngOnInit(): void {
    this.getAllResults();
  }

  //Name and return type of API
  getAllResults()
  {
    this.ResultService.getAllResults().subscribe(
      data =>{
        this.allResults = data;

        // if(this.allQuestions.length <= 0){
        //   this.goToHome();
        //   this.confirmationDialogService.confirm('Sorry', 'This Test is Unavailable at the moment');
        //   return;
        // }

        console.log(this.allResults);
   
      }
    );

    
  }

}
