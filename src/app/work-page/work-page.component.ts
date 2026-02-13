import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements AfterViewInit{
    constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {

    const section = this.route.snapshot.data['section'] as string | undefined;


    const targetId = section ?? 'intro';


    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

}
