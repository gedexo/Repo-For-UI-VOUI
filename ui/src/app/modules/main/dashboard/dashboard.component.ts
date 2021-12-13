import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions  } from 'ngx-owl-carousel-o';
import {DashboardService } from '../../service/dashboard.service'

import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  margin: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  beauty = 'nav_link';
  beauty_arrow = 'hide_arrow';
  sports = 'nav_link';
  sports_arrow ="hide_arrow";
  electronics = 'nav_link';
  electronics_arrow = "hide_arrow";
  fashion = 'nav_link';

  fashion_arrow= "hide_arrow";
  household = 'nav_link';
  household_arrow= "hide_arrow";
  petsupply = 'nav_link';
  petsupply_arrow= "hide_arrow";
  auto_moto= 'nav_link';
  auto_moto_arrow= "hide_arrow";

  error = '';
  url  = '../../../../assets//images/banner-2.jpg';



  offerOptions: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
          0:{
              items:1,

          },
         769:{
              items:3,
              margin:40,

          },
          1000:{
              items:3,

              loop:true,
              autoplay :false,
              margin:40,
          }
          },

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center:true,
    navSpeed: 700,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
      0:{
        items:1,



    },
   769:{
        items:3,
        margin:40,

    },
    1000:{
        items:3,

        loop:true,
        autoplay :false,
        margin:40,
    }

    },
  }
  normalOptions: OwlOptions = {
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
      769: {
        items: 4,
        margin:60
      },

    },
    nav: true
  }


  contactForm:FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required]),
});


offerSale:any = [

  {
    imgUrl : '../../../../assets/images/offer-2.jpg',
    alt: 'offer-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/offer-3.jpg',
    alt: 'offer-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-1.png',
    alt: 'offer-4',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  }
]

newArraivals:any = [
  {
    imgUrl : '../../../../assets/images/arrival-1.png',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-2.png',
    alt: 'arrival-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-3.png',
    alt: 'arrival-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-4.png',
    alt: 'arrival-4',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-1.png',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/arrival-2.png',
    alt: 'arrival-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  }
]


bagsTrends:any = [
  {
    imgUrl : '../../../../assets/images/bag-1.png',
    alt: 'bag-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/bag-2.png',
    alt: 'bag-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/bag-3.png',
    alt: 'bag-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/bag-4.png',
    alt: 'bag-4',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/bag-1.png',
    alt: 'bag-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/bag-2.png',
    alt: 'bag-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  }
]
// bind category images
   category1 = '../../../../assets/images/category-1.jpg';
   name1 ="Women's Fashion";

   category2 = '../../../../assets/images/category-2.jpg';
   name2 ="Men's Fashion";

   category3 = '../../../../assets/images/category-3.jpg';
   name3 ="Kid's Fashion";



  constructor(private http: HttpClient,
    private dashboardService :DashboardService,
    private el: ElementRef,) {

  }

  data:any;


  @HostListener('window:scroll', ['$event'])
onScroll(event:any) {
  AOS.init();

}

  carouselWindowWidth= null;
   ngOnInit(): void {



   }
  onIndexChange($event:any){
    console.log('log');

  }

  hoverBeauty($event:any):void{
    this.beauty = $event.type == 'mouseover' ? 'active_link' : '';
    this.beauty_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/arrival-1.png';
    this.category2 = '../../../../assets/images/category-2.jpg'
    this.category3 = '../../../../assets/images/arrival-3.png';
    this.name1 ="Women's Fashion";
    this.name2 ="Men's Fashion";
    this.name3 ="Kid's Fashion";
  }

  hoverSports($event:any):void{
    this.sports = $event.type == 'mouseover' ? 'active_link' : '';
    this.sports_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/offer-1.jpg';

    this.category2 = '../../../../assets/images/arrival-2.png'

    this.category3 = '../../../../assets/images/category-1.jpg';
    this.name1 ="Women's Fashion";
    this.name2 ="Men's Fashion";
    this.name3 ="Kid's Fashion";

  }
  hoverElectronics($event:any):void{
    this.electronics = $event.type == 'mouseover' ? 'active_link' : '';
    this.electronics_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/arrival-1.png';

    this.category2 = '../../../../assets/images/offer-2.jpg';

    this.category3 = '../../../../assets/images/category-1.jpg';
    this.name1 ="Women's Fashion";
    this.name2 ="Men's Fashion";
    this.name3 ="Kid's Fashion";


  }
  hoverFashion($event:any):void{
    this.fashion = $event.type == 'mouseover' ? 'active_link' : '';
    this.fashion_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';

    this.category1 = '../../../../assets/images/category-1.jpg';

    this.category2 = '../../../../assets/images/category-2.jpg';

    this.category3 = '../../../../assets/images/category-3.jpg';
  }

  hoverHousehold($event:any):void{
    this.household = $event.type == 'mouseover' ? 'active_link' : '';
    this.household_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/offer-1.jpg';

    this.category2 = '../../../../assets/images/offer-2.jpg'

    this.category3 = '../../../../assets/images/offer-3.jpg';
    this.name1 ="Women's Fashion";
    this.name2 ="Men's Fashion";
    this.name3 ="Kid's Fashion";
  }
  hoverPetSupplies($event:any):void{
    this.petsupply = $event.type == 'mouseover' ? 'active_link' : '';
    this.petsupply_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/bag-1.png';

    this.category2 = '../../../../assets/images/arrival-2.png'

    this.category3 = '../../../../assets/images/category-3.jpg'
  }
  hoverAutoMoto($event:any):void{
    this.auto_moto = $event.type == 'mouseover' ? 'active_link' : '';
    this.auto_moto_arrow = $event.type == 'mouseover' ? 'show_arrow' : 'hide_arrow';
    // this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
    // this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';
    this.category1 = '../../../../assets/images/category-1.jpg';

    this.category2 = '../../../../assets/images/arrival-2.png'

    this.category3 = '../../../../assets/images/arrival-3.png'
  }

mouseOver($event:any):void{
  this.fashion = $event.type == 'mouseover' ? '' : 'active_link';
  this.fashion_arrow = $event.type == 'mouseover' ? 'hide_arrow' : ' show_arrow';

}


  submitContact():void {
    if (this.contactForm.valid === true) {
      console.log(this.contactForm.value);


    if (!(/^(?<name>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<extn>[a-zA-Z]{2,5})$/ugm).test(this.contactForm.value.Email)) {

     this.error =" * please enter valid email address";
    }
    else{
      console.log('murugan');
      this.error ="";
    }

    }
    else{
      this.error =" * please enter your email address";

    }
  }



    // customOptions: any = {
    //   loop: true,
    //   mouseDrag: true,
    //   touchDrag: true,
    //   pullDrag: true,
    //   dots: false,
    //   navSpeed: 700,
    //   nav:true,
    //   navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    //   responsive: {
    //     0:{
    //       items:1,

    //   },
    //  769:{
    //       items:3,
    //       margin:40,

    //   },
    //   1000:{
    //       items:3,

    //       loop:true,
    //       autoplay :true,
    //       margin:40,
    //   }
    //   },
    // }

    changeCurousal(event:any):void{
      console.log(event);


    }
  }
