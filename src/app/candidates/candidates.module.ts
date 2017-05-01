import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatesComponent } from './candidates.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidatesRoutingModule } from './candidates.routing';
import { CandidateService } from '../services/index';
import { CandidateFilterPipe } from './shared/filter.pipe';
import { EventsModule } from '../events/events.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CandidatesRoutingModule,
        EventsModule
    ],
    exports: [CandidateListComponent],
    declarations: [
        CandidatesComponent,
        CandidateListComponent,
        CandidateDetailComponent,
        CandidateFilterPipe,
    ],
    providers: [CandidateService],
})
export class CandidateModule { }
