import { Component, HostListener } from '@angular/core';

type MenuKey = 'work' | 'beyond' | null;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  drawerOpen = false;

  lastScroll = 0;
  navHidden = false;
    @HostListener('window:scroll', [])
  onWindowScroll() {

    const currentScroll = window.scrollY;


    if (currentScroll < 40) {
      this.navHidden = false;
      this.lastScroll = currentScroll;
      return;
    }


    if (currentScroll > this.lastScroll) {
      this.navHidden = true;
    }

    else {
      this.navHidden = false;
    }

    this.lastScroll = currentScroll;
  }

  openDrawer() {
    this.drawerOpen = true;
    document.body.style.overflow = 'hidden'; 
  }

  closeDrawer() {
    this.drawerOpen = false;
    document.body.style.overflow = '';
  }

  navAndClose() {
    this.closeDrawer();
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.drawerOpen) this.closeDrawer();
  }

}
