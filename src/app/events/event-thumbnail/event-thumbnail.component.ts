import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent, IEventResource } from '../../models/models';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:IEventResource;

  constructor() { }

  ngOnInit() {
  }

}
