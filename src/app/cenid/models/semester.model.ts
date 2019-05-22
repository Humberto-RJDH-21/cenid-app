import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Injectable } from '@angular/core';

export interface Semester {
  cdSemester: number;
  dsSemester: string;
  dateStart: string;
  dateFinish: string;
  swActive: boolean;
}

export const formSemester = {
  dsSemester: [null, Validators.required],
  dateStart: [null, Validators.compose([Validators.required, CustomValidators.date])],
  dateFinish: [null, Validators.compose([CustomValidators.date])],
  swActive: [null, Validators.required]
};

export const defaultSemester = [
  {
  cdSemester: 1,
  dsSemester: '18B-19A',
  dateStart: '2018-10-04',
  dateFinish: '2019-07-15',
  swActive: true
}

];

@Injectable()
export class Semesters {
  semester: Semester[];

  constructor() {
    this.semester = defaultSemester;
  }

  getData(): Semester[] {
    return this.semester;
  }

  getForm() {
    return formSemester;
  }

}
