import { Component, OnInit } from '@angular/core';
import { SuperUserModel } from '../Models/SuperUserModel';
import { ProfileService } from '../Services/Profile.Service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  superUserInfo : SuperUserModel = new SuperUserModel();
  adminId : string = "";

  constructor(private ProfileService : ProfileService) { }

  ngOnInit(): void {
    this.viewSuperUser();
  }

  viewSuperUser(){
    let tk = JSON.parse(localStorage.getItem('user')!);
    this.adminId = tk.adminId;

    this.ProfileService.viewSuperUser(this.adminId).subscribe(
      data =>{
        this.superUserInfo = data;
        console.log(this.superUserInfo);
      }
    );
  }

}
