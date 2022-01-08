import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions  } from 'ngx-owl-carousel-o';
import {DashboardService } from '../../service/dashboard.service'

import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import { HeaderService } from 'app/modules/service/header.service';
import { Router } from '@angular/router';

import{offerSale } from  'assets/models/offerSales';
import{images } from  'assets/models/image'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  error = '';
  url  = '../../../../assets//images/banner-2.jpg';
  mainCategory:any = [];
  offerSale:offerSale[] =[];
  newArraivals:any[]=[];
  name1:string='';
  name2:string='';
  name3:string='';
  category1 :string='';
  category2 :string='';
  category3 :string='';
  id1:string='';
  id2:string='';
  id3:string='';
  shopAll:any = ''

  offerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    center:true,
    nav:true,
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

  suggestionOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    autoplayHoverPause: false,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
        margin:10
      },
      500: {
        items: 2,
        margin:10
      },
      768: {
        items: 3,
        margin:40
      },
      1000: {
        items: 4,
        margin:40
      },
      1500: {
        items: 5,
        margin:40
      }
    },
    nav: true
  }

  contactForm:FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required]),
});


banner:any = [

  {
    imgUrl : '../../../../assets/images/banner-2.jpg',
    alt: 'offer-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/banner-3.jpg',
    alt: 'offer-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/banner-1.jpg',
    alt: 'offer-4',
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
  constructor(private http: HttpClient,
    private dashboardService :DashboardService,
    private readonly headerService:HeaderService,
    private readonly router: Router,
    private el: ElementRef,) {

  }

  data:any;


@HostListener('window:scroll', ['$event'])
onScroll(event:any) {
  AOS.init();
}

   ngOnInit(): void {

    this.headerService.getCategory().subscribe((data: any) =>{


      this.mainCategory = data;
      this.openSubCategories(this.mainCategory[0].subcategories, this.mainCategory[0].id)
    })

    this.dashboardService.getOfferSales().subscribe((data:any) =>{


      this.offerSale = data;


    })

    this.dashboardService.getNewArrivals().subscribe((data: any) =>{
      this.newArraivals = data;

   })


   }

  submitContact():void {
    if (this.contactForm.valid === true) {

    if (!(/^(?<name>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<extn>[a-zA-Z]{2,5})$/ugm).test(this.contactForm.value.Email)) {
     this.error =" * please enter valid email address";
    }
    else{
      this.error ="";
    }
    }
    else{
      this.error =" * please enter your email address";

    }
  }

    openSubCategories(data:any, id:number){

      this.id1 = data[0].id;
      this.id2 = data[1].id;
      this.id3 = data[2].id;
      this.shopAll = id;


      this.name1 =data[0].name;
      this.name2 =data[1].name;
      this.name3 =data[2].name;

      this.category1 =data[0].image['original'];
      this.category2 =data[1].image['original'];
      this.category3 =data[2].image['original'];

    }
    productPreview(id: number): void {
      let link = ['offersales'];
      this.router.navigate(link);
    }
  }
