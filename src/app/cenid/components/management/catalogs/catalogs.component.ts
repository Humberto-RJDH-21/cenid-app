import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  activeLinkIndex = 0;
  activeTabIndex = 0;

  // Standard tabs demo
  tabs = [{
    label: 'Semesters',
    content: 'This is the body of the first tab',
    route: '/management/semester'
  }, {
    label: 'Faculties',
    content: 'This is the body of the second tab',
    route: '/management/faculty'
  }, {
    label: 'Class Hours',
    content: 'This is the body of the third tab',
    route: '/management/class-hour'
  }, {
    label: 'Levels',
    content: 'This is the body of the fourth tab',
    route: '/management/level'
  }, {
    label: 'Courses',
    content: 'This is the body of the fourth tab',
    route: '/management/course'
  }
];
  constructor(private router: Router) {
  }

  ngOnInit() {
  }



}
