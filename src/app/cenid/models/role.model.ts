import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

export interface Role {
  cdRole: number;
  rName: string;
  dsRole: string;
  swActive: boolean;
  comments: string;
}
export const roleForm = {
  rName: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
  dsRole: [null, Validators.compose([Validators.required])],
  comments: [null, Validators.compose([Validators.maxLength(500)])],
  swActive: [null, Validators.required]
};
export const defaultRoles = [
  {
    cdRole: -999,
    rName: 'ROOT',
    dsRole: 'Super Manager',
    comments: 'Rol con permisos de Lectura/Escritura y configuración de toda la aplicación',
    swActive: true
  },
  {
    cdRole: 1,
    rName: 'ADMIN',
    dsRole: 'Manager',
    comments: 'Rol con permisos de Lectura/Escritura de toda la aplicación',
    swActive: true
  },
  {
    cdRole: 2,
    rName: 'TEACHER',
    dsRole: 'Personal',
    comments: 'Rol con permisos de Lectura/Escritura del módulo de gestión de control de calificaciones',
    swActive: true
  },
  {
    cdRole: 3,
    rName: 'STUDENT',
    dsRole: 'Student',
    comments: 'Rol con permisos de Lectura de ',
    swActive: true
  }
];
@Injectable()
export class Roles {
  roles: Role[];

  getRoles(): Role[] {
    return this.roles;
  }

  getForm() {
    return roleForm;
  }

  constructor() {
    this.roles = defaultRoles;
  }


}
