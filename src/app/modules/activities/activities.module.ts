import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ActivitiesRoutes } from './activities.routes';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ActivitiesComponent } from './components/activities.component';

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ActivitiesRoutes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class ActivitiesModule {}
