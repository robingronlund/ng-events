import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';


const candidateRoutes: Routes = [
  {
    path: '', component: CandidatesComponent, children: [
      { path: '', component: CandidateListComponent },
      { path: ':id', component: CandidateDetailComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(candidateRoutes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule { }

export const routedComponents = [CandidatesComponent, CandidateListComponent, CandidateDetailComponent];