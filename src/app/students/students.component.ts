import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  
})

export class StudentsComponent implements OnInit {

  constructor() { }
  contact:any;
  ngOnInit(): void {
  
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isMarried:true,
      email:"",
    };
    
  }

  studentDetailsArr:any = [];
  studuentdata:any = {};
  fname:string="";
  keys:any = [];
  showtable:boolean = false;

  saveStudentData(studuentdata:any,studInfo:NgForm){
    this.keys = Object.keys(studuentdata);
    console.log(this.keys);
    console.log(studuentdata);
    
    this.studentDetailsArr.push(studuentdata);
    this.showtable = true;

    studInfo.reset()  


  }

}
