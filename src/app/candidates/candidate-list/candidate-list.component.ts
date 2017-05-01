import { Component, OnInit } from '@angular/core';
import { ICandidateResource } from '../../models/models';
import { IEventResource } from '../../models/models';
import { CandidateService } from '../../services/index';
import { EventService } from '../../services/index';
import { Observable } from 'rxjs/Observable';
import { CandidateFilterPipe } from '../shared/filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: ICandidateResource[];
  events: IEventResource[];
  selectedEvent: Object;

  constructor(private candidateService: CandidateService, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.populateTable();
    this.populateEventDropDown();
  }

  onSelect(id: string) {
    this.router.navigate(['', +id])
  }

  populateEventDropDown() {
    this.eventService.getAllEvents()
      .subscribe((data) => {
        this.events = data;
      })
  }

  populateTable() {
    this.candidateService.getAllCandidates()
      .subscribe(
      (data) => { this.candidates = data; },
      (err) => { })
  }



  // populates the table from selected event of dropdown
  // a candidate will always be registered at a event, therenore no need to handle empty Object
  // if no event have been choosen, populate list will all candidates
  onChange(eventValue) {
    if (eventValue.length > 0) {
      this.eventService.getCandidatesOfEvent(eventValue)
        .subscribe((data) => {
          this.candidates = data;
        })
    } else {
      this.populateTable();
    }
  }
}
