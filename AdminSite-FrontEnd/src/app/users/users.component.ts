import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { UserService } from '../Services/Users.Service';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit 
{

  constructor(private UserService : UserService, private confirmationDialogService: ConfirmationDialogService,
    private routerObj : Router) { }

  p: number = 1;
  count: number = 10;

  allUsers : UserModel[] = [];
  displayEdit : boolean = false;

  ngOnInit(): void 
  {
    this.getAllUsers();
  }

  //Name and return type of API
  getAllUsers()
  {
    this.UserService.getAllUsers().subscribe(
      data =>{
        this.allUsers = data;

        // if(this.allQuestions.length <= 0){
        //   this.goToHome();
        //   this.confirmationDialogService.confirm('Sorry', 'This Test is Unavailable at the moment');
        //   return;
        // }

        console.log(this.allUsers);
   
      }
    );

    
  }

  displayEdits(usn : string)
  {
     this.routerObj.navigate(['/goToUpdateUser', usn]);
  }

  displayAdd()
  {
    this.routerObj.navigate(['/goToUpdateUser', '-1']); //Are strings enclosed in '' or ""?
  }

  goToHome()
  {
    this.routerObj.navigate(['/GoToHome']);
  }

  deleteRow(usn : string)
  {

    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to delete user ' + usn + "?")
     .then((confirmed) =>{
       if(confirmed)
       {
          this.UserService.removeUser(usn).subscribe(data => {
            console.log(data);
            this.getAllUsers();
            }
          )
       }

     });
  }

  

}
