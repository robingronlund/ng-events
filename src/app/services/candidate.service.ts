import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { ApiService } from './index';
import { ICandidateResource } from '../models/models';

@Injectable()
export class CandidateService {
    private endPoint = '/api/candidates';
    constructor(private apiService: ApiService) { }

    getCandidateById(id: string) {
        return this.apiService.get(this.endPoint + '/' + id)
            .map((response: Response) => {
                return response.json()
            })
    }

    getAllCandidates() {
        return this.apiService.get(this.endPoint)
            .map((response: Response) => {
                return response.json()._embedded.candidates
            })
    }


    getEventsOfCandidate(id: number) {
        return this.apiService.get(this.endPoint + '/' + id + '/events')
            .map((response: Response) => {
                return response.json()._embedded.events
            })

    }

    updateCandidate(id:String ,candidate: Object){
        return this.apiService.put(this.endPoint + '/' + id, candidate)
            .map((response:Response) => {
                return response;
            })
    }


    // not used
    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body.data || {});
    }
}

    // getCandidateById(handle: string) {
    //     return this.apiService.get(this.endPoint + `/${handle}`)
    //         .subscribe()
    // }

//     private mapCandidates(response: Response): models.ICandidateResource[] {
//     debugger;
//     return response.json()._body.map(this.toCandidate)
// }

//     private toCandidate(r: any): models.ICandidateResource {
//     let candidate = <models.ICandidateResource>({
//         education: r.education,
//         email: r.email,
//         firstName: r.firstName,
//         gender: r.gender,
//         interests: r.interests,
//         lastName: r.lastName,
//         links: r.links,
//         phone: r.phone,
//         registrationDate: r.registrationDate,
//         status: r.status,
//         thumbnail: r.thumbnail,
//         type: r.type,
//         yearOfBirth: r.yearOfBirth
//     })
//     debugger;
//     return candidate;
// }
// }