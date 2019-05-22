import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Catalogs Management */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogsComponent } from './components/management/catalogs/catalogs.component';
import { FacultyComponent } from './components/management/faculty/faculty.component';
import { SemesterComponent } from './components/management/semester/semester.component';
import { ClassHourComponent } from './components/management/class-hour/class-hour.component';
import { LevelComponent } from './components/management/level/level.component';
import { CourseComponent } from './components/management/course/course.component';

/* Models */
import { Students } from './models/student.model';

/* Imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModuleModule } from '../common/mat-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { CenidRoutingModule } from './cenid-routing.module';
import { Semesters } from './models/semester.model';
import { ClockComponent } from '../common/timePicker/clock/clock.component';
import { TimePickerComponent } from '../common/timePicker/time-picker/time-picker.component';
import { ControlComponent } from './components/control/control/control.component';
import { TeachersComponent } from './components/control/teachers/teachers.component';
import { StudentsComponent } from './components/control/students/students.component';
import { PersonalComponent } from './components/control/personal/personal.component';
import { TableComponent } from './components/control/teachers/table/table.component';


@NgModule({
  declarations: [
        DashboardComponent,
        CatalogsComponent,
        FacultyComponent,
        SemesterComponent,
        ClassHourComponent,
        LevelComponent,
        CourseComponent,
        ClockComponent,
        TimePickerComponent,
        ControlComponent,
        TeachersComponent,
        StudentsComponent,
        PersonalComponent,
        TableComponent
        ],

  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatModuleModule,
        FlexLayoutModule,
        SharedModule,
      CenidRoutingModule
  ],
  providers: [
    Students,
    Semesters
  ]
}
)
export class CenidModule { }
