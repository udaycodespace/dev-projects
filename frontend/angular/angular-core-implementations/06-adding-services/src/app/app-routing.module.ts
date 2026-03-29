// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ExpComponent } from './exp/exp.component';

const routes: Routes = [
  { path: 'ff', component: FacultyComponent },
  { path: 'ss', component: StudentComponent },
  { path: '', redirectTo: '/ff', pathMatch: 'full' },
  { path: '**', component: ExpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
