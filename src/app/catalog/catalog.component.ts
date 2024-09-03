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

  mainlink: '/main'
  openMenu() {
    const topNav = document.getElementById("myTopnav");
    if (topNav) {
      if (topNav.className === "topnav") {
        topNav.className += " responsive";
      } else {
        topNav.className = "topnav";
      }
    }
  }
  closeMenu() {
    const topNav = document.getElementById("myTopnav");
    if (topNav && topNav.className.includes("responsive")) {
      topNav.className = "topnav"; // Close the menu
    }
  }
}
