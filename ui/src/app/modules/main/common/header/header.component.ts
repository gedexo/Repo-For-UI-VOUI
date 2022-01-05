import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'app/modules/service/main.service';
import { HeaderService } from 'app/modules/service/header.service';
import { MatSidenav } from '@angular/material/sidenav';
import 'boxicons';
import * as AOS from 'aos';




export interface subtasks {
  name: string;
  completed: boolean;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  loginTitle = "Login"
  user = 'murugan';
  no_of_items = 5;
  showArrow = false;

  showFiller = false;

  mega_menu = 'hide_mega_menu';

  offer_button = 'nav_link';
  brand_button = 'nav_link';
  beauty_button = 'nav_link';
  fashion_button = 'nav_link';
  sport_button = 'nav_link';
  electronics_button = 'nav_link';
  household_button = 'nav_link';
  petsupply_button = 'nav_link';
  automoto_button = 'nav_link';

  subCategories:any[] =[];


  mainCategory:any = [];

  subsubCategories:any = [];

  toggle_class = false;
  shopAll:number= 0;
  fontStyle?: string;

  size: subtasks[] = [
    { name: 'FR ', completed: false },
    { name: 'En', completed: false },
  ];

  message: string = "Hola Mundo!"



  @Output() messageEvent = new EventEmitter<string>();

  @ViewChild('rightSidenav', {static: true}) sidenav: MatSidenav | any;

  @ViewChild('drawer') drawer: MatSidenav | any;

  @HostListener('document:click', ['$event']) onDocumentClick(event:any) {
    if(this.drawer.open()){
    this.drawer.close();
    }
    if(this.mainService.open()){
      this.mainService.close();
    }

  }

  quantity: number;
  SSId:any;
  ssName :any;




  constructor(private router: Router,
    private readonly mainService:MainService,
    private readonly headerService:HeaderService,) {
    this.quantity = 1;

  }

  form: FormGroup = new FormGroup({
    currency: new FormControl('Euro'),
  });

  searchForm: FormGroup = new FormGroup({
    inputValue: new FormControl(''),
  });

  ngOnInit(): void {
    this.showArrow = false;
    this.toggle_class = false;
    AOS.init();
    this.headerService.getCategory().subscribe((data: any) =>{

      this.mainCategory = data;
    })
  }
  ClosePanel(): void {
    this.subCategories =[];
  }
  openSubCategories(event: any, value: any): void {


    this.shopAll = value;

    this.subCategories = event;
    this.subsubCategories = [];
  }
  openSubSubCategories(event: any, id:number, name:string) {

    this.SSId = id;
    this.ssName = name;
    this.subsubCategories = event;

  }

  upsertSearch(): void {

  }
  toggleLanguage(language:string): void {


  }

	toggleActive = false;

	toggleRightSidenav() {

    this.mainService.open();
	}
  changeCurrency(value:any):void{
this.mainService.currencyType = value;

  }
  close(event:any){


  }

routeToListView(categoryt:string, id:number){
  this.router.navigate([this.shopAll,id], {
    queryParams: {
       id
    },

  });
}


}


