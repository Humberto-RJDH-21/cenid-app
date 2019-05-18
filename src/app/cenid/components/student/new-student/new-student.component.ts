import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Students } from 'src/app/cenid/models/student.model';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
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
  public students: Students;
  constructor(private fb: FormBuilder) {
    this.min = 0;
    this.max = 1000;
    this.students = new Students();
    this.form = this.fb.group(this.students.getForm());
  }
  ngOnInit() {

    this.setFormValues();
  }

  setFormValues() {
    this.form.controls.rcomplete.setValue('0');
  }
}
