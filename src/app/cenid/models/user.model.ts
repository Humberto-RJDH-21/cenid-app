import { Validators, FormGroup, FormControl } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { Role } from './role.model';
import { Injectable } from '@angular/core';

export interface User {
    cdUser: number;
    user: string;
    password: string;
    swActive: boolean;
    swResetPassword: boolean;
    role: Role;
}
export const password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)]));
export const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

export const UserForm = {
    user: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
    password,
    swActive: [null, Validators.required],
    swResetPassword: [null, Validators.required],
    cdRole: [null, Validators.required]
};

export const resetPwdForm = {
    cdUser: [null, Validators.required],
    password,
    confirmPassword
};

export const defaultUsers = [
    {
        cdUser: -999,
        user: 'root',
        password: 'root',
        swActive: true,
        swResetPassword: false,
        role: {
            cdRole: -999,
            rName: 'ROOT',
            dsRole: 'Super Manager',
            comments: 'Rol con permisos de Lectura/Escritura y configuración de toda la aplicación',
            swActive: true
        }
    },
    {
        cdUser: -99,
        user: 'admin',
        password: 'admin',
        swActive: true,
        swResetPassword: false,
        role: {
            cdRole: 1,
            rName: 'ADMIN',
            dsRole: 'Manager',
            comments: 'Rol con permisos de Lectura/Escritura de toda la aplicación',
            swActive: true
          }
    }
];

@Injectable()
export class Users {
    users: User[];

    constructor() {
        this.users = defaultUsers;
    }

    getUserForm() {
        return UserForm;
    }

    getResetPasswordForm() {
        return resetPwdForm;
    }
}
