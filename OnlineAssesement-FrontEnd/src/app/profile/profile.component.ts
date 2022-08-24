import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/UserModel';
import { ProfileService } from '../Service/Profile.Service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ProfileService : ProfileService) { }

  userInfo : UserModel = new UserModel();
  USN : string = "";

  ngOnInit(): void {
      this.viewUser();
  }

  viewUser(){
    let tk = JSON.parse(localStorage.getItem('user')!);
    this.USN = tk.usn;

    this.ProfileService.viewUser(this.USN).subscribe(
      data =>{
        this.userInfo = data;
        console.log(this.userInfo);
      }
    );
    
  }

}
