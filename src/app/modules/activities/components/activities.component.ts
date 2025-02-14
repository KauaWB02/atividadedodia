import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'activity-activities',
  templateUrl: './activities.component.html',
})
export class ActivitiesComponent implements OnInit {
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Testando',
      draggable: false,
    },
  ];
  refresh = new Subject<void>();
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = true;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly route: Router) {}

  ngOnInit(): void {
    console.log(startOfDay(new Date()))
    console.log(new Date())
  }

  dayClicked(event: { date: Date; events: CalendarEvent[] }): void {
    console.log(event);
  }

  eventTimesChanged(event: CalendarEventTimesChangedEvent): void {
    console.log(event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
