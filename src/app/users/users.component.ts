import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  usersData: any = [];
  cols: any = [];

  page = 1;
  userId: any;


  constructor(private userservice: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      (usersResponseData) => {
        this.usersData = usersResponseData;

        for (var i = 0; i < this.usersData.length; i++) {
          for (var key in this.usersData[i]) {
            if (this.cols.indexOf(key) === -1) {
              this.cols.push(key);
            }
          }
        }
      },
      (error) => {
        console.error('Users data not getting');
        alert(error);
      },
      () => {
        console.log("sucessfully completed....");

      }
    );

  }

  handlePageChange(event: any) {
    this.page = event;
  }

}