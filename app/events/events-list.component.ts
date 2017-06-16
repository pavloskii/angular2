import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr /> 
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[]

    constructor(private eventService: EventService, private router:ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.router.snapshot.data['events']
    }
}