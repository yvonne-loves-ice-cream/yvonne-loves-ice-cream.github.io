import { Component } from '@angular/core';

interface IMenuLink{
  routePath: string;
  linkName: string
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  menu: Array<IMenuLink> = [
    
    
    {
      routePath: '/work-experience',
      linkName: 'Work Experience'
    },
    {
      routePath: '/about-me',
      linkName: 'About Me'
    }
  ]

  openMenu(): void {
    var x = document.getElementById("myTopnav")!;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
