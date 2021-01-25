import { Component, OnInit } from '@angular/core';

interface IMenuLink{
  routePath: string;
  linkName: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: Array<IMenuLink> = [
    
    
    {
      routePath: '/interests',
      linkName: 'Interests'
    },
    {
      routePath: '/work-experience',
      linkName: 'Work Experience'
    },
    {
      routePath: '/about-me',
      linkName: 'About Me'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


openMenu(): void {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
 
  
}
