import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-parking-dashboard',
  templateUrl: './parking-dashboard.component.html',
  styleUrls: ['./parking-dashboard.component.css']
})
export class ParkingDashboardComponent implements OnInit {
  // animal: string;
  // name: string;
  constructor(public userservice: UserService) {
    
   }
  forms;
  ngOnInit() {
   this.forms = new FormGroup({
     firstname: new FormControl(""),
     lastname: new FormControl(""),
     email: new FormControl(""),
     contactno: new FormControl(""),
     address: new FormControl(""),
   })
  }

  onsubmit = function(user) {
    console.log(user);
  }

  logout() {
    this.userservice.logout();
  }

}
