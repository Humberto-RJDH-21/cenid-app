import { Validators, FormGroup } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { Injectable } from '@angular/core';

export interface Student {
    matricula: string;
    fName: string;
    sName: string;
    lName: string;
    gender: string;
    email: string;
    entrypoint: string;
    rCompleted: string;
    cdUser: number;
    comments: string;
    swActive: boolean;
    cdGrupo: number;
    cdStatusEnrollment: number;
}

export const test = {
    matricula: '2014060202',
    fName: 'Daniel Humberto',
    sName: 'Ramírez',
    lName: 'Juárez',
    gender: 'H',
    email: 'humberto.rjdh@gmail.com',
    entrypoint: '2014-07-15',
    rCompleted: '450',
    cdUser: null,
    comments: null,
    swActive: true,
    cdGrupo: 1006,
    cdStatusEnrollment: null
};

export const StudentForm = {
    matricula: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    sname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    lname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    gender: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, CustomValidators.email])],
    entrypoint: [null, Validators.compose([Validators.required, CustomValidators.date])],
    rcomplete: [null, Validators.compose([Validators.required, CustomValidators.range([0, 1000])])],
    swUser: [null, Validators.required],
    comments: [null, Validators.compose([Validators.maxLength(500)])],
    swActive: [null, Validators.required],
    cdGroup: [null, Validators.required],
    cdFaculty: [null, Validators.required]
};

@Injectable()
export class Students {
    student: Student;

    getStudent(): Student {
        return this.student;
    }
    getForm() {
        return StudentForm;
    }

    constructor() {
        this.student = test;
    }
}
