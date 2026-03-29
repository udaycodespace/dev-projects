import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { FutureGoalsComponent } from './future-goals/future-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    AcademicDetailsComponent,
    FutureGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
