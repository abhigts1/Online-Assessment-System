import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../Models/UserModel';
import { updateUserService } from '../Services/updateUser.Service';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private us : updateUserService, 
    private confirmationDialogService: ConfirmationDialogService, private routerObj : Router) { }

  userInfo : UserModel = new UserModel();
  USN : any;
  
  ngOnInit(): void {
    this.USN = this.route.snapshot.paramMap.get('usn');  
    if(this.USN === '-1')
    {
        
    }
    else
    {
      this.viewUser();
    }
  }

  addUser()
  {
    this.us.addUser(this.userInfo).subscribe(
      data =>{

        if(data)
        {
          this.confirmationDialogService.confirm('Note: ', 'User Added Successfully!')
          .then((confirmed) =>{

            //Take me back to HomePage
            this.goToUser();
          });
        }
        else
        {
          this.confirmationDialogService.confirm('Error: ', 'User not added!')
          .then((confirmed) =>{
          });
        }
      }
    );

    // console.log(this.userInfo);
  }

  updateUser()
  {
     //Call Update Service
     this.us.updateUser(this.USN, this.userInfo).subscribe(
      data =>{

        if(data)
        {
          this.confirmationDialogService.confirm('Note: ', 'Update Successfull!')
          .then((confirmed) =>{
            this.goToUser();
          });
        }
        else
        {
          this.confirmationDialogService.confirm('Error: ', 'Update failed!')
          .then((confirmed) =>{
          });
        }
      }
    );
  }

  viewUser()
  {
    
    this.us.viewUser(this.USN).subscribe(
      data =>{
        this.userInfo = data;
        console.log(this.userInfo);
      }
    );
    
  }

  goToUser()
  {
    this.routerObj.navigate(['/goToUser']);
  }

}
