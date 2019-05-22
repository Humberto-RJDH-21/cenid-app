import { Component, OnInit, ViewChild } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Teachers, Teacher } from 'src/app/cenid/models/teacher.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Semester } from 'src/app/cenid/models/semester.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TeachersComponent {
  panelOpenState = false;
  form: FormGroup;
  teachers: Teachers;

  displayedColumns: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder) {
    this.teachers = new Teachers();
    this.form = this.fb.group(this.teachers.getForm());
  }
}
