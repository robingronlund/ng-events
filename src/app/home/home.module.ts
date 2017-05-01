import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home.component';
import { EventsModule } from '../events/events.module';
import { CandidateModule } from '../candidates/candidates.module';
import { HomeRoutingModule, routedComponents } from './home.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        EventsModule,
        CandidateModule,
    ],
    declarations: [HomeComponent, routedComponents, DashboardComponent],
})
export class HomeModule { }
