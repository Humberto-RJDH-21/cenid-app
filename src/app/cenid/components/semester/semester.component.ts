import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  /*
  cdSemestre:number;
    dsSemestre:string;
    dateStart:Date;
    dateFinish:Date;
    swActive:boolean;
  */
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dateStart: [null, Validators.compose([Validators.required, CustomValidators.date])],
      dateFinish: [null, Validators.compose([Validators.required, CustomValidators.date])],
      swActive: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
