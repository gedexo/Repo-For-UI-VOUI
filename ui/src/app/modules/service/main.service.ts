import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { Inject } from '@angular/core';


const MOBILE_SCREEN_MAX_WIDTH = 768;
@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // isMobileView = ():boolean => this.document.defaultView?.innerWidth <= MOBILE_SCREEN_MAX_WIDTH;

  // isMobileView =():boolean => {
  //   if (this.document.defaultView !== null) {
  //     this.document.defaultView.innerWidth <= MOBILE_SCREEN_MAX_WIDTH;
  //     console.log(  this.document.defaultView.innerWidth.valueOf());


  //   }
  // }
  private sidenav: MatSidenav | any;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
