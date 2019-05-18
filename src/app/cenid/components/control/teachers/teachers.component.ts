import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Teachers } from 'src/app/cenid/models/teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1000;
  min = 0;
  showTicks = true;
  step = 20;
  thumbLabel = true;
  value = 0;
  vertical = false;


  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
// tslint:disable-next-line: variable-name
  private _tickInterval = 1;
  public form: FormGroup;
  public teachers: Teachers;
  constructor(private fb: FormBuilder) {
    this.min = 0;
    this.max = 1000;
    this.teachers = new Teachers();
    this.form = this.fb.group(this.teachers.getForm());
  }
  ngOnInit() {

    this.setFormValues();
  }

  setFormValues() {
  }

}
