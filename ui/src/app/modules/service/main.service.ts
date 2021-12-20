import { EventEmitter, Injectable, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Currency } from 'app/modules/models/currency'


const MOBILE_SCREEN_MAX_WIDTH = 768;
@Injectable({
  providedIn: 'root',
})
export class MainService {


  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  @Output() fire: EventEmitter<any> = new EventEmitter();

  @Output() dataChangeObserver: EventEmitter<any>=new EventEmitter();

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
  currencyType = 'EUR';




}
