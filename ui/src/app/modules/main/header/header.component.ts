import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface currencies {
  value: string;
  name: string;

}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  user='murugan';
  
  currencies: currencies[] = [
    {value: 'Euro', name:'€ Euro'},
    {value: 'dollar', name:'$ doller'},
    {value: 'Sterling', name:'£ doller'},
    {value: 'UAE Dirham', name:'د.إ doller'},
    {value: 'Saudi Riyal', name:'SR doller'},

  ];


  ngOnInit(): void {
  }

}
