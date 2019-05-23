import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: []
})
export class ToolbarComponent implements OnInit {
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }

  ];
  constructor(private router:Router,@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['session/login']);
  }
}
