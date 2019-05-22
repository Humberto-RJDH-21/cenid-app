import { Component, ViewChild, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Teachers, Teacher } from 'src/app/cenid/models/teacher.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class TableComponent implements OnInit{
  teachers = new Teachers();
  //dataSource = this.teachers.getData();
  columnsToDisplay = ['dsFirstName', 'dsSurNames', 'mxPhone', 'email', 'swActive'];
  displayedColumns = ['Name', 'Apellidos', 'Teléfono', 'Mail', 'Estatus'];
  expandedElement: Teacher | null;
  dataSource: MatTableDataSource<Teacher>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder) {
    this.teachers = new Teachers();
    this.dataSource = new MatTableDataSource(this.teachers.getData());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
export interface columns {
  name: string;
  code: string;
}

const columnsToShow: columns[] =[
  {
    name: 'name',
    code: 'dsFirstName'
  },
  {
    name: 'phone',
    code: 'mxPhone'
  },
  {
    name: 'mail',
    code: 'email'
  }

  
  /*'dsFirstName', 'dsSurNames', 'gender', 'mxAddress', 'email', 'swActive', 'mxPhone'*/
  /* 
  'dsFirstName', 'dsSurNames', 'gender', 'mxAddress', 'email', 'swActive', 'mxPhone' */
];