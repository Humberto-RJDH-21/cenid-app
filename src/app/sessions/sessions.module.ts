import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { MatModuleModule } from '../common/mat-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UserComponent } from './users/user/user.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NotFoundComponent, SigninComponent, NewUserComponent, UserComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatModuleModule,
    FlexLayoutModule
  ]
})
export class SessionsModule { }
