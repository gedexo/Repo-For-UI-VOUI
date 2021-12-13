import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    AOS.init();
  }


  ngOnInit(): void {
  }

}
