import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

export interface Faculty {
    cdFaculty: number;
    dsFaculty: string;
}

export const formFaculty = {
    dsFaculty: [null, Validators.required]
};

export const defaultFaculties = [
    {
        cdFaculty: 6,
        dsFaculty: 'Informática',
    },
    {
        cdFaculty: 3,
        dsFaculty: 'Enfermería',
    },
    {
        cdFaculty: 1,
        dsFaculty: 'Municipales',
    }
];

@Injectable()
export class Faculties {
    faculties: Faculty[];

    constructor() {
        this.faculties = defaultFaculties;
    }

    getData(): Faculty[] {
        return this.faculties;
    }
    getForm() {
        return formFaculty;
    }

}
