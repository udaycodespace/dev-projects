import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { FutureGoalsComponent } from './future-goals/future-goals.component';

const routes: Routes = [
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'academic', component: AcademicDetailsComponent },
  { path: 'future', component: FutureGoalsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } // default empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
