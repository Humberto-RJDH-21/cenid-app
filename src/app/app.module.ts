import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './layouts/admin/admin.component';
import { ToolbarComponent } from './layouts/admin/toolbar/toolbar.component';
import { SidenavComponent } from './layouts/admin/sidenav/sidenav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatModuleModule } from './common/mat-module.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BlankComponent } from './layouts/blank/blank.component';
import { BlankToolbarComponent } from './layouts/blank/blank-toolbar/blank-toolbar.component';
import { ItemLinkComponent } from './layouts/core/item-link/item-link.component';
import { ItemNavComponent } from './layouts/core/item-nav/item-nav.component';
import { SessionsModule } from './sessions/sessions.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ToolbarComponent,
    SidenavComponent,
    SpinnerComponent,
    BlankComponent,
    BlankToolbarComponent,
    ItemLinkComponent,
    ItemNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatModuleModule,
    SharedModule,
    BrowserAnimationsModule,
    SessionsModule

  ],
  entryComponents: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
