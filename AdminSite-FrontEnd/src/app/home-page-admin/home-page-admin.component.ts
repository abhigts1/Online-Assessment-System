import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../Services/ConfirmationDialog.Service';


@Component({
  selector: 'app-home-page-admin',
  templateUrl: './home-page-admin.component.html',
  styleUrls: ['./home-page-admin.component.css']
})
export class HomePageAdminComponent implements OnInit
 {

  /**
 * @title Basic use of the tab group
 */
   constructor(private router: Router, private confirmationDialogService: ConfirmationDialogService) { }
   background: ThemePalette = 'primary';
   adminId : string = '';
   ngOnInit(): void 
   {
     let tk = JSON.parse(localStorage.getItem('user')!);
     this.adminId = tk.adminId;
   }
 
   logout()
   {
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
