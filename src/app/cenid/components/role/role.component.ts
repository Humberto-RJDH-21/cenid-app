import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
/*
  cdRole:number;
  role:string;
  dsRole:string;
  swActive:boolean;
  comments:string;
*/
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({

    });
   }

  ngOnInit() {
  }

}
