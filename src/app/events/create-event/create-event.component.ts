import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from "../../services/index";
import { IEvent } from '../../models/models';
import { TOASTR_TOKEN, Toastr } from "../../common/index";


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  eventType = IEvent.TypeEnum;
  keys(): Array<string> {
    var keys = Object.keys(this.eventType);
    return keys.slice(keys.length / 2);
  }

  isDirty: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private eventService: EventService,
    @Inject( TOASTR_TOKEN) private _toastr: Toastr) {

  }

  ngOnInit() {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      host: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      venue: ['', Validators.required],
      contact: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern('^(http://|https://)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$')]],
      wifiname: ['', Validators.required],
      wifipwd: ['', Validators.required],
      notes: ['']
    })
  }

  onSubmit(createEventForm) {
    this.eventService.createEvent(this.createEventForm.value)
      .subscribe(
      (data) => { },
      (err) => { this._toastr.error('Event creation failed', 'Error!')},
      () => { this.resetForm(), this._toastr.success('Event has been created', 'Success!') }
      )
  }

  resetForm() {
    this.createEventForm.reset()
    this.isDirty = false;
  }
}
