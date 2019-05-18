import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Faculties, Faculty } from 'src/app/cenid/models/faculty.model';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  panelOpenState = false;
  faculties: Faculties;
  form: FormGroup;

  displayedColumns: any;

  dataSource: MatTableDataSource<Faculty>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder) {
    this.faculties = new Faculties();
    this.displayedColumns = [ 'dsFaculty', 'star'];
    /* this.dataSource=this.faculties.semester; */
    this.form = this.fb.group(this.faculties.getForm());
    this.dataSource = new MatTableDataSource(this.faculties.getData());
  }



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
