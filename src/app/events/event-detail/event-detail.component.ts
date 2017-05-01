import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/index';
import { IEventResource, ICandidateResource } from '../../models/models';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEventResource;
  candidates: ICandidateResource[];
  numberOfCandidates: number;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.eventService.getEventById(params['id']))
      .subscribe((data) => {
        this.event = data;
      })

    this.route.params
      .switchMap((params: Params) => this.eventService.getCandidatesOfEvent(params['id']))
      .subscribe((data) => {
        this.candidates = data;
        this.numberOfCandidates = data.length;
      })

  }

}
