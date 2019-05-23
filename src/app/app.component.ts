import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminMaterial';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }

  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string){
    
  }
}
