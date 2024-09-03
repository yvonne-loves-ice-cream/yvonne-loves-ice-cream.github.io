import { Component } from '@angular/core';
import { experiences } from './experience';
import { TimelineEvent } from '@progress/kendo-angular-layout';



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  experiences = []


  ngOnInit(): void{
    this.experiences = experiences.sort((a, b) => b.date - a.date);

  }

  ngOnDestroy():void{
    this.experiences = []
  }
}


