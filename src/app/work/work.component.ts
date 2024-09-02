import { Component } from '@angular/core';
import { experiences } from './experience';
import { TimelineEvent } from '@progress/kendo-angular-layout';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  events: TimelineEvent[];

  ngOnInit(): void{
  this.events = experiences

  }

  ngOnDestroy():void{
    this.events = []
  }
}


