import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

export interface Personal {
    cdPersonal: number;
    dsSurNames: string;
    dsFirstName: string;
    mxAddress: string;
    mxPhone: string;
    otherAddress: string;
    email: string;
    unsisStartedAt: string;
    comments: string;
    cdUsuario: number;
    swActive: boolean;
}
export const formPersonal = {
    sNames: [null, Validators.required],
    fNames: [null, Validators.required],
    mxAddress: [null, Validators.required],
    mxPhone: [null, Validators.compose([Validators.required, CustomValidators.phone('es-MX')])],
    othPhone: [null, Validators.compose([Validators.required, CustomValidators.phone('en-US')])],
    othAddress: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, CustomValidators.email])],
    unsisStartedAt: [null, Validators.compose([Validators.required, CustomValidators.date])],
    comments: [null, Validators.compose([Validators.maxLength(500)])],
    cdUser: [null, Validators.required],
    swActive: [null, Validators.required]
};
export const defaultPersonal = {
    cdPersonal: 1,
    dsSurNames: 'admin',
    dsFirstName: 'admin',
    mxAddress: 'Miahuatlán, Oax, Mx',
    mxPhone: '9512546630',
    otherAddress: null,
    email: 'admin@unsis.edu.mx',
    unsisStartedAt: '2014-01-01',
    comments: '',
    cdUsuario: -99,
    swActive: true
};

@Injectable()
export class Personals {
    personal: Personal;

    constructor() {
        this.personal = defaultPersonal;
    }

    getForm() {
        return formPersonal;
    }

}
