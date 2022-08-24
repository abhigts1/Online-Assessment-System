import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultModel } from '../Models/ResultMode';
import { MatPaginator } from '@angular/material/paginator';
import { Result } from '../Service/Result.Service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  studentResult: ResultModel[] = [];
  displayedColumns: string[] = ['SubjectID', 'SubjectName', 'Score'];
  dataSource: MatTableDataSource<ResultModel>;
  
  constructor( private ResultService : Result) { }

  ngOnInit(): void {
    this.getAllResultsForAUSN();
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.studentResult);
      this.dataSource.paginator = this.paginator;
    }, 1000);
}

  getAllResultsForAUSN(){
    this.ResultService.getAllResultsForAUSN().subscribe(
      data =>{
        this.studentResult = data;
        console.log(this.studentResult);
      }
    );
    
  }

}
