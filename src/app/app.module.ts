import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyProgramComponent } from './WeeklyPrograms/weekly-program/weekly-program.component';
import { DailyProgramListComponent } from './WeeklyPrograms/daily-program-list/daily-program-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyProgramItemWorkoutComponent } from './WeeklyPrograms/daily-program-item-workout/daily-program-item-workout.component';
import { DailyProgramItemMealComponent } from './WeeklyPrograms/daily-program-item-meal/daily-program-item-meal.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './coach/sidebar/sidebar.component';
import { DescriptionComponent } from './coach/description/description.component';
import { RelatedCoursesComponent } from './coach/related-courses/related-courses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoachComponent } from './coach/coach/coach.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test2Component } from './test2/test2.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyProgramComponent,
    DailyProgramListComponent,

    DailyProgramItemWorkoutComponent,
    DailyProgramItemMealComponent,
    TestComponent,
    SidebarComponent,
    DescriptionComponent,
    RelatedCoursesComponent,
    LoginComponent,
    RegisterComponent,
    CoachComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     MatStepperModule,
    MatNativeDateModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
