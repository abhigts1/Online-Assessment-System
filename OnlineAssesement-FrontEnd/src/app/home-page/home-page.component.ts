import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../Service/confirmation-dialog.Service';

/**
 * @title Basic use of the tab group
 */

@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private confirmationDialogService: ConfirmationDialogService) { }
  background: ThemePalette = 'primary';
  usn : string = '';
  ngOnInit(): void {
    let tk = JSON.parse(localStorage.getItem('user')!);
    this.usn = tk.usn;
  }

  logout(){
    this.confirmationDialogService.confirm('Please confirm', 'Do you really want to LogOut?')
    .then((confirmed) =>{
      if(confirmed){
        localStorage.removeItem('user');
    console.log('Cache cleared.');
    //route to login page
    this.router.navigateByUrl("/login");
      }
    });
  }

}

