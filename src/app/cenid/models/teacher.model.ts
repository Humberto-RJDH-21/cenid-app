import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { EmergencyContact, formEmergencyContact } from './emergency-contact.model';

export interface Teacher {
    cdProfesor: number;
    dsSurNames: string;
    dsFirstName: string;
    gender: string;
    mxAddress: string;
    mxPhone: string;
    homeAddress: string;
    email: string;
    unsisStartedAt: string;
    unsisLeftAt: string;
    comments: string;
    cdUsuario: number;
    swActive: boolean;
    emergencyContact: EmergencyContact;
}

export const data = [{
    cdProfesor: 1,
    dsSurNames: 'admin',
    dsFirstName: 'admin',
    gender: 'male',
    mxAddress: 'Miahuatlán',
    mxPhone: '9512546630',
    homeAddress: 'USA',
    email: 'humberto.rjdh@gmail.com',
    unsisStartedAt: '2019-01-01',
    unsisLeftAt: null,
    comments: null,
    cdUsuario: 1,
    swActive: true,
    emergencyContact:
        {
            cdEmergencyContact: 1,
            teacher: 1,
            name: 'admin',
            phone: '9512546630',
            mail: 'humberto.rjdh@gmail.com',
            dsFax: null
        }
}];

export const teacherForm = {
    dsSurNames: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
    dsFirstName: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
    gender: [null, Validators.required],
    mxAddress: [null, Validators.compose([Validators.maxLength(250)])],
    mxPhone: [null, Validators.compose([CustomValidators.phone('es')])],
    homeAddress: [null, Validators.compose([Validators.maxLength(250)])],
    email: [null, Validators.compose([Validators.required, CustomValidators.email])],
    unsisStartedAt: [null, Validators.compose([Validators.required, CustomValidators.date])],
    unsisLeftAt: [null, CustomValidators.date],
    comments: [null, Validators.maxLength(255)],
    cdUsuario: 1,
    swActive: true,
    emergencyContact: formEmergencyContact
    /*     matricula: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
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
        cdFaculty: [null, Validators.required] */
};


@Injectable()
export class Teachers {
    teachers: Teacher[];

    getData(): Teacher[] {
        return this.teachers;
    }
    getForm() {
        return teacherForm;
    }

    constructor() {
        this.teachers = data;
    }
}
