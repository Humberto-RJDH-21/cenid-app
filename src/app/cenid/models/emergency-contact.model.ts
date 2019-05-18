import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Injectable } from '@angular/core';

export interface EmergencyContact {
      cdEmergencyContact: number;
      teacher: number;
      name: string;
      phone: string;
      mail: string;
      dsFax: string;
}

export const formEmergencyContact = {
      teacher: [null, Validators.required],
      dsname: [null, Validators.required],
      phone: [null, Validators.compose([Validators.required, CustomValidators.phone('es-MX')])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      dsFax: [null, Validators.required]
};

@Injectable()
export class EmergencyContacts {

      getForm() {
            return formEmergencyContact;
      }
}
