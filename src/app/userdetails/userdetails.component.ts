import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {

  usrdata: any = [];
  userId: any;
  constructor(private router: Router, private userservice: UserService, private activatedRoute: ActivatedRoute) {
    console.log("user details called....");
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log("observale Id= " + this.userId);

      this.userservice.getUser(this.userId).subscribe(
        (data) => {
          this.usrdata = data;
        }
      );
    });
  }

  navigation(){
    this.router.navigate(['user']);
  }
}
