import {Component, ElementRef, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  beauty = 'nav_link';
  beauty_arrow = 'hide_arrow';
  sports = 'nav_link';
  sports_arrow ="hide_arrow";
  electronics = 'nav_link';
  electronics_arrow = "hide_arrow";
  fashion = 'active_link';
  fashion_arrow= "show_arrow";
  household = 'nav_link';
  household_arrow= "hide_arrow";
  petsupply = 'nav_link';
  petsupply_arrow= "hide_arrow";
  auto_moto= 'nav_link';
  auto_moto_arrow= "hide_arrow";

  error = '';
  url  = '../../../../assets//images/banner-2.jpg';

  
  contactForm:FormGroup = new FormGroup({
    Email: new FormControl('',[Validators.required]),
});

 
offerImages:any = [
  {
    imgUrl : '../../../../assets/images/offer-1.jpg',
    alt: 'offer-1'
  },
  {
    imgUrl : '../../../../assets/images/offer-2.jpg',
    alt: 'offer-2'
  },
  {
    imgUrl : '../../../../assets/images/offer-3.jpg',
    alt: 'offer-3'
  },
  {
    imgUrl : '../../../../assets/images/offer-1.jpg',
    alt: 'offer-4'
  }
]
    
   
  constructor(public elementRef:ElementRef,) { 
  
  }
 
   ngOnInit(): void {
    const minPerSlide = 4
   }

  
  hoverBeauty($event:any):void{
    this.beauty = $event.type == 'mouseover' ? 'active_link' : '';
    this.beauty_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
  }

  hoverSports($event:any):void{
    this.sports = $event.type == 'mouseover' ? 'active_link' : '';
    this.sports_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    
  }
  hoverElectronics($event:any):void{
    this.electronics = $event.type == 'mouseover' ? 'active_link' : '';
    this.electronics_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';

  }
  hoverFashion($event:any):void{
    this.fashion = $event.type == 'mouseover' ? 'active_link' : '';
    this.fashion_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
  }

  hoverHousehold($event:any):void{
    this.household = $event.type == 'mouseover' ? 'active_link' : '';
    this.household_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
  }
  hoverPetSupplies($event:any):void{
    this.petsupply = $event.type == 'mouseover' ? 'active_link' : '';
    this.petsupply_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
  }
  hoverAutoMoto($event:any):void{
    this.auto_moto = $event.type == 'mouseover' ? 'active_link' : '';
    this.auto_moto_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
  }

     
 
  submitContact():void {
   

    if (!this.contactForm.valid) {
     
      return;
    }

    if (!(/^(?<name>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<extn>[a-zA-Z]{2,5})$/ugm).test(this.contactForm.value.Email)) {
   
    
     this.error =" * please enter valid emial address";
    }
    else{
      console.log('murugan');
      this.error ="";
    }
    
    }


    cofferOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    }
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
 
  }


