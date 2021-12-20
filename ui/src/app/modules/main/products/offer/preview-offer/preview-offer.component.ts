import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import * as AOS from 'aos';



export interface productData {
  id: number;
  imgUrl: string;
  alt: string;
  imgName: string;
  price:number;
  secondImage: string;
  thirdImage: string;
  Brand:string;
  size: string;

}

export interface subtasks {
  name: string;
  completed: boolean;

}

export interface color {
  name: string;
  completed: boolean;
  color:string;

}

@Component({
  selector: 'app-preview-offer',
  templateUrl: './preview-offer.component.html',
  styleUrls: ['./preview-offer.component.scss','../../stylesheet/preview-style.scss'],
})
export class PreviewOfferComponent implements OnInit {


  @Input() article: any;
  articleList: productData[] = [];


  product:Array<string>=[];
  reviewS:any;
  images:any;

  preview_sm1?:any;
  preview_sm2?:any;
  preview_sm3?:any;
  preview_lg?:any;


  aboutProduct = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla.Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et.';


isFirst = false;

panelOpenState = false;

  size: subtasks[] = [
    {name: 'S', completed: false},
    {name: 'M', completed: false},
    {name: 'L', completed: false},
    {name: 'XL', completed: false},
    {name: 'XXL', completed: false},


];

color: color[] = [
  {name: 'S', completed: false,color: 'green'},
  {name: 'M', completed: false, color:'white'},
  {name: 'L', completed: false, color:'black'},


];
products:productData[] = [
  {
    id : 1,
    imgUrl : '../../../../assets/images/grid1.png',
    alt: 'offer-1',
    imgName: 'Hair Care',
    price : 10,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'vivo',
    size : 's',
  //   reviewS:[
  //    {
  //      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //    },
  //    {
  //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //   },
  //   {
  //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //   },
  //   {
  //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //   },
  //   {
  //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //   },
  //   {
  //    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //  },
  //   ]
  },
  { id : 2,
    imgUrl : '../../../../assets/images/grid2.png',
    alt: 'offer-2',
    imgName: 'Fragrance',
    price : 19.99,
    secondImage: '../../../../assets/images/grid5.jpg',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'oppo',
    size : 'm',
  //   review:[
  //     {
  //       review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //     },
  //     {
  //      review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //    },
  //    {
  //      review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //    },
  //    {
  //     review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //   },
  //   {
  //    review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
  //  },

  //    ]

  },
  {
    id : 3,
    imgUrl : '../../../../assets/images/grid3.png',
    alt: 'offer-3',
    imgName: 'Fragrance',
    price : 50,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'realme',
    size : 'l',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },

    //  ]

  },
  {
    id : 4,
    imgUrl : '../../../../assets/images/grid4.jpg',
    alt: 'offer-4',
    imgName: 'Skin Care',
    price : 19.99,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'realme',
    size : 'xl',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },

    //  ]

  },
  {
    id : 5,
    imgUrl : '../../../../assets/images/grid5.jpg',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : 39,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'oppo',
    size : 'xxl',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  ]
  },
  {
    id : 6,
    imgUrl : '../../../../assets/images/grid9.jpg',
    alt: 'arrival-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : 19.99,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'vivo',
    size : 's',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },

    //  ]
  },
  {
    id : 7,
    imgUrl : '../../../../assets/images/grid6.jpg',
    alt: 'arrival-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : 19.99,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'realme',
    size : 'm',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //   review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    // },
    // {
    //   review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    // },

    //  ]
  },
  {
    id : 8,
    imgUrl : '../../../../assets/images/grid7.jpg',
    alt: 'arrival-4',
    imgName: 'Lorem ipsum dolor sit amet',
    price : 19.99,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'oppo',
    size : 'l',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //   review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    // },


    //  ]

  },
  {
    id : 9,
    imgUrl : '../../../../assets/images/grid8.jpg',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : 19.99,
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    Brand: 'vivo',
    size : 'xl',
    // review:[
    //   {
    //     review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //   },
    //   {
    //    review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //    review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    //  },
    //  {
    //   review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    // },
    // {
    //   review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    // },

    //  ]
  },


  ]

  galleryThumbsConfig = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };
  galleryTopConfig = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: undefined
    }
  };



  customOptions: any = {
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
        items: 1,
        margin:30
      },
      500: {
        items: 2,
        margin:30
      },
      768: {
        items: 2,
        margin:30
      },
      769: {
        items: 3,
        margin:40
      }
    },
    nav: true
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

  constructor(
              private route: ActivatedRoute,
              private readonly router:Router,
              private _snackBar: MatSnackBar,) {
    // console.log(this.router.getCurrentNavigation()?.extras.state);
    this.reviewS = [];
   }

   counter(i: number) {
    return new Array(i);
}

@HostListener('window:scroll', ['$event'])
onScroll(event:any) {
  AOS.init();

}


leftMenuDrawerOpened = true;

value:any = 0;
  ngOnInit(): void {
this.route.params.subscribe(data =>{
  for(let idx in data){
    this.value = data[idx];
  }

}  );

for(let idx in this.products){


  if(this.products[idx].id == this.value){
   console.log(this.products[idx]);

   this.preview_sm1 = this.products[idx].imgUrl;
this.preview_sm2 = this.products[idx].secondImage;
this.preview_sm3 =this.products[idx].thirdImage;
this.preview_lg = this.preview_sm1;
   return

  }
}


}

changelgImage(event:any):void{

  this.preview_lg = event;


}

addtocart(): void {
  console.log('hi');

  this._snackBar.open('1 item added to card !', '',{
    horizontalPosition: 'end',
    verticalPosition: 'top',
  });
  setTimeout(()=>{
    this._snackBar.dismiss()
}, 700)

}

gotoCheckout():void{
  this.router.navigate(['userinfo']);
}

onIndexChange(event:any){



}
changePreviewImage(smImage:any){
  console.log(smImage);

  this.preview_lg = smImage;

}
}

