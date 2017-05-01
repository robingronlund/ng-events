import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CreateEventComponent } from './create-event/create-event.component';

const eventRoutes: Routes = [
    {
        path: '', component: EventsComponent,
        children: [
            { path: '', component: EventListComponent },
            { path: 'new', component: CreateEventComponent },
            { path: ':id', component: EventDetailComponent }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(eventRoutes)],
    exports: [RouterModule],
})
export class EventRoutingModule { }

export const routedComponents = [EventsComponent, EventListComponent, EventDetailComponent, CreateEventComponent];