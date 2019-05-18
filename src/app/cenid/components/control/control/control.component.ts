import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  activeLinkIndex = 0;
  activeTabIndex = 0;

  tabs = [{
    label: 'Teachers',
    content: 'Teachers',
    route: '/control/teachers'
  }, {
    label: 'Students',
    content: 'Students',
    route: '/control/students'
  }, {
    label: 'Personal',
    content: 'Personal',
    route: '/control/personal'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
