import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { ApiService } from './index';
import * as models from '../models/models';

@Injectable()
export class EventService {
    private endPoint = '/api/events';

    constructor(private apiService: ApiService) { }

    getEventById(id: number) {
        return this.apiService.get(this.endPoint + '/' + id)
            .map((response: Response) => {
                return response.json()
            })
    }

    getAllEvents() {
        return this.apiService.get(this.endPoint)
            .map((response: Response) => {
                return response.json()._embedded.events
            })
    }

    getCandidatesOfEvent(id: number) {
        return this.apiService.get(this.endPoint + '/' + id + '/candidates')
            .map((response: Response) => {
                return response.json()._embedded.candidates
            })
    }

    createEvent(event: Object) {
        debugger;
        return this.apiService.post(this.endPoint, event)
    }
}