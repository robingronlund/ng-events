import { Component, OnInit } from '@angular/core';
import { CandidateService, EventService } from '../services/index';
import { ICandidateResource, IEventResource } from '../models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: IEventResource[];
  candidates: ICandidateResource[];
  totalEvents: Number;
  totalCandidates: Number;

  constructor(private eventService: EventService, private candidateService: CandidateService) { }

  ngOnInit() {
    this.eventService.getAllEvents()
      .subscribe((data) => {
        this.events = data;
        this.totalEvents = this.events.length;
      })

    this.candidateService.getAllCandidates()
      .subscribe((data) => {
        this.candidates = data;
        this.totalCandidates = this.candidates.length;
      })
  }

}
