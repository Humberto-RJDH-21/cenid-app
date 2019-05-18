import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogsComponent } from './components/management/catalogs/catalogs.component';
import { FacultyComponent } from './components/management/faculty/faculty.component';
import { SemesterComponent } from './components/management/semester/semester.component';
import { LevelComponent } from './components/management/level/level.component';
import { CourseComponent } from './components/management/course/course.component';
import { ClassHourComponent } from './components/management/class-hour/class-hour.component';
import { TeachersComponent } from './components/control/teachers/teachers.component';
import { StudentsComponent } from './components/control/students/students.component';
import { PersonalComponent } from './components/control/personal/personal.component';
import { ControlComponent } from './components/control/control/control.component';




const cenidRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'management',
    component: CatalogsComponent,
    children: [
      {
        path: '',
        redirectTo: 'semester',
        pathMatch: 'full'
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'semester',
        component: SemesterComponent
      },
      {
        path: 'level',
        component: LevelComponent
      },
      {
        path: 'class-hour',
        component: ClassHourComponent
      },
      {
        path: 'course',
        component: CourseComponent
      }
    ]
  },
  {
    path: 'control',
    component: ControlComponent,
    children: [
      {
        path: '',
        redirectTo: 'teachers',
        pathMatch: 'full'
      },
      {
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'personal',
        component: PersonalComponent
      }
    ]
  }
  /*   ,
    {
      path: '',
      children: [
        {
          path: 'students',
          component: StudentComponent
        },
        {
          path: 'newStudent',
          component: NewStudentComponent
        },
        {
          path: 'classes',
          component: ClassComponent
        },
        {
          path: 'newClass',
          component: NewClassComponent
        },
        {
          path: 'role',
          component: RoleComponent
        },
        {
          path: 'level',
          component: NivelComponent
        },
        {
          path: 'newNivel',
          component: NewNivelComponent
        },
        {
          path: 'group',
          component: GroupComponent
        }
      ]
    } */
];

@NgModule({
  imports: [RouterModule.forChild(cenidRoutes)],
  exports: [RouterModule]
})
export class CenidRoutingModule { }
