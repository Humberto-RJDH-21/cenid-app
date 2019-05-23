import { Component, OnInit, ViewChild } from '@angular/core';
import { Classes, ClassHour } from 'src/app/cenid/models/class.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-class-hour',
  templateUrl: './class-hour.component.html',
  styleUrls: ['./class-hour.component.scss']
})
export class ClassHourComponent implements OnInit {
  panelOpenState = false;
  Classes: Classes;
  form: FormGroup;
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  displayedColumns: any;

  dataSource: MatTableDataSource<ClassHour>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.Classes = new Classes();
    this.displayedColumns = ['dsClass', 'classTime', 'star'];
    /* this.dataSource=this.Classes.semester; */
    this.form = this.fb.group(this.Classes.getForm());
    this.form.controls.classTime.setValue(this.exportTime);
    this.dataSource = new MatTableDataSource(this.Classes.getData());
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

  public onRevert() {
    this.exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 12 };
    this.snackBar.open(`Revert time to ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 1000,
    });
  }

  public onSubmit() {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 1000,
    });
  }

  public onChange(time) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });
  }
}
