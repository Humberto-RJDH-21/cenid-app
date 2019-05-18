import { Time, formatDate } from '@angular/common';
import { Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Injectable } from '@angular/core';

export const dateInit = new Date();

export interface timeClock {
   hour: number;
   minute: number;
   meriden: string;
   format: number;
}

export interface ClassHour {
   cdClass: number;
   dsClass: string;
   classTime: timeClock;
}

export const formClass = {
   dsClass: [null, Validators.required],
   classTime: [null, Validators.compose([Validators.required])]
};

export const defaultClass = [
   {
      cdClass: 1,
      dsClass: 'Class 1',
      classTime: {
         hour: 7,
         minute: 45,
         meriden: 'AM',
         format: 12
      }
   },
    {
      cdClass: 2,
      dsClass: 'Class 2',
      classTime: {
         hour: 8,
         minute: 0o0,
         meriden: 'AM',
         format: 12
      }
   },
   {
      cdClass: 3,
      dsClass: 'Class 3',
      classTime: {
         hour: 9,
         minute: 0o0,
         meriden: 'AM',
         format: 12
      }
   },
   {
      cdClass: 4,
      dsClass: 'Class 4',
      classTime: {
         hour: 10,
         minute: 0o0,
         meriden: 'AM',
         format: 12
      }
   },
   {
      cdClass: 5,
      dsClass: 'Class 5',
      classTime: {
         hour: 11,
         minute: 0o0,
         meriden: 'AM',
         format: 12
      }
   },
   {
      cdClass: 6,
      dsClass: 'Class 6',
      classTime: {
         hour: 12,
         minute: 0o0,
         meriden: 'PM',
         format: 12
      }
   },
   {
      cdClass: 7,
      dsClass: 'Class 7',
      classTime: {
         hour: 1,
         minute: 0o0,
         meriden: 'PM',
         format: 12
      }
   },
   {
      cdClass: 8,
      dsClass: 'Class 8',
      classTime: {
         hour: 4,
         minute: 0o0,
         meriden: 'PM',
         format: 12
      }
   }, {
      cdClass: 9,
      dsClass: 'Class 9',
      classTime: {
         hour: 5,
         minute: 0o0,
         meriden: 'PM',
         format: 12
      }
   }, {
      cdClass: 10,
      dsClass: 'Class 10',
      classTime: {
         hour: 6,
         minute: 0o0,
         meriden: 'PM',
         format: 12
      }
   }
];

@Injectable()
export class Classes {
   classes: ClassHour[];

   constructor() {
      this.classes = defaultClass;
   }

   getForm() {
      return formClass;
   }

   getData() {
      return this.classes;
   }
}
