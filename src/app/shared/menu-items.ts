import { Injectable } from '@angular/core';
import { MenuItem } from '../common/interfaces';
export const MENUITEMS = [
  {
    route: 'management',
    name: 'Administración',
    type: 'sub',
    icon: 'settings',
    badge: [
      { type: 'purple', value: '10' }
    ]
  },
  {
    route: 'control',
    name: 'Control',
    type: 'sub',
    icon: 'people',
    badge: [
      { type: 'purple', value: '10' }
    ]
  }
  /* ,
  {
    route: 'classes',
    name: 'Clases',
    type: 'sub',
    icon: 'person',
    badge: [
      { type: 'purple', value: '10' }
    ],
    children: [
      { route: 'newClass', name: 'Agregar Clase', type: 'link', icon: 'class' },
      { route: 'class', name: 'Clases', type: 'link', icon: 'calendar_view' }
    ]
  },
  {
    route: 'role',
    name: 'Rol',
    type: 'sub',
    icon: 'person'
  },
  {
    route: 'nivel',
    name: 'Nivel',
    type: 'sub',
    icon: 'person',
    children: [
      { route: 'newNivel', name: 'Agregar Nivel', type: 'link', icon: 'class' }
    ]
  } */
];

@Injectable()
export class MenuItems {
  getMenu(): MenuItem[] {
    return MENUITEMS;
  }
}
