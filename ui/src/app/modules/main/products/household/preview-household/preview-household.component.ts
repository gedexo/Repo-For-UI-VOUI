import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-preview-household',
  templateUrl: './preview-household.component.html',
  styleUrls: ['./preview-household.component.scss','../../stylesheet/preview-style.scss']
})
export class PreviewHouseholdComponent implements OnInit {


  product:Array<string>=[];
  reviewS:any;
  images:any;

  preview_sm1?:any;
  preview_sm2?:any;
  preview_sm3?:any;
  preview_lg?:any;


  customOptions: OwlOptions = {
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        margin:30
      }
    },
    nav: true
  }
  suggestionOptions: OwlOptions = {
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
        margin:80
      }
    },
    nav: true
  }
offerSale:any = [
  {
    imgUrl : '../../../../assets/images/offer-1.jpg',
    alt: 'offer-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
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
  },
  {
    imgUrl : '../../../../assets/images/offer-1.jpg',
    alt: 'offer-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
  {
    imgUrl : '../../../../assets/images/offer-2.jpg',
    alt: 'offer-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '€19.99',
  },
]

  constructor(private router: Router, private route: ActivatedRoute, private location:Location) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    this.reviewS = [];
   }

   counter(i: number) {
    return new Array(i);
}

  ngOnInit(): void {

    this.route.queryParams.subscribe(items =>{
      console.log(items);





const value =Object.entries(items)


for(let idx=0;idx <value.length;idx++){


  if(value[idx][0] === 'review'){
    console.log(value[idx][1], typeof value[idx][1]);

    this.reviewS = value[idx][1];
  }
  if(value[idx][0] === 'imgUrl'){
    console.log(value[idx][1], typeof value[idx][1]);
    this.preview_sm1=value[idx][1]
  }
  if(value[idx][0] === 'secondImage'){
    console.log(value[idx][1], typeof value[idx][1]);
    this.preview_sm2=value[idx][1]
  }
  if(value[idx][0] === 'thirdImage'){
    console.log(value[idx][1], typeof value[idx][1]);
    this.preview_sm3=value[idx][1]
  }


}
});

this.preview_lg = this.preview_sm1;


}
changelgImage(event:any):void{

  this.preview_lg = event;


}

}
