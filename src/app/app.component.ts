import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yvonnesun';
   showNav = true;
    private readonly hideNavOn = new Set<string>(['/', '/landing']);

  constructor(private router: Router) {
     this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
         const url = (e as NavigationEnd).urlAfterRedirects.split('?')[0];

        const isLanding = url === '/' || url === '/landing';

        this.showNav = !isLanding;
        document.body.classList.remove('fade-out');
      });
  }
//   ngOnInit(){
//   this.router.navigate(['/landing']);
// }

}
