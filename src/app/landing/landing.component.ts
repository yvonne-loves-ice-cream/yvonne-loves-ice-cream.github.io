import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent {
   workImage = 'assets/image/babel.jpg';
  lifeImage = 'assets/image/kiss.jpg';


  workLink = '/about-me';
  lifeLink = '/beyond-work';
  private hasNavigated = false; 
  constructor(private router: Router) {}

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.hasNavigated) return;


    if (event.deltaY > 30) {
       this.hasNavigated = true;


      document.body.classList.add('fade-out');

      setTimeout(() => {
        this.router.navigate(['/about-me']); 
      }, 400);
    }
  }




}
