import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModule } from './events.routing';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventService } from '../services/index';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
    imports: [
        CommonModule,
        EventRoutingModule,
        ReactiveFormsModule
    ],
    exports: [EventThumbnailComponent],
    declarations: [
        EventsComponent,
        EventListComponent,
        EventDetailComponent,
        EventThumbnailComponent,
        CreateEventComponent,
    ],
    providers: [EventService],
})
export class EventsModule { }
