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
            name: 'admin emergency contact',
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
