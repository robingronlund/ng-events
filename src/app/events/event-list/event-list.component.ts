import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/index';
import { IEventResource } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEventResource[] = [];
  errMsg: string;
  constructor(private eventservice: EventService, private router: Router) { }

  ngOnInit() {
    this.eventservice.getAllEvents()
      .subscribe(
      (data) => { this.events = data; },
      (err) => { this.errMsg = err },
      () => { })
  }

}
