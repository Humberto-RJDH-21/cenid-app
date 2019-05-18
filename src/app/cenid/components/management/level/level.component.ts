import { Component, OnInit } from '@angular/core';
import { Levels, Level } from 'src/app/cenid/models/nivel.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  levels: Levels;
  form: FormGroup;

  displayedColumns: any;
  dataSource: MatTableDataSource<Level>;

  constructor(
    private fb: FormBuilder
  ) {
    this.levels = new Levels();
    this.displayedColumns = ['dsLevel', 'nameLevel', 'star'];
    this.form = this.fb.group(this.levels.getForm());
    this.dataSource = new MatTableDataSource(this.levels.getData());
  }

  ngOnInit() {
  }

}
