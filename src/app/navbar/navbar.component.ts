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
      routePath: '/about-me',
      linkName: 'About Me'
    },
    {
      routePath: '/work-experience',
      linkName: 'Work Experience'
    },
    {
      routePath: '/interests',
      linkName: 'Interests'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
 
  
}
