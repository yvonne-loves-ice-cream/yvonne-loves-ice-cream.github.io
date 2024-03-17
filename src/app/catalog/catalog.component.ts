import { Component } from '@angular/core';
import { Route } from '@angular/router';

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
      routePath:'/blogs',
      linkName: 'Blogs'
    },
    {
      routePath: '/experience',
      linkName: 'Experience'
    },
    {
      routePath: '/about-me',
      linkName: 'About Me'
    }
  ]

  mainlink: '\main'
  openMenu(): void {
    var x = document.getElementById("myTopnav")!;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
