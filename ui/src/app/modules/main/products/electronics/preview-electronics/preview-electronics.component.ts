import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from "@angular/router";



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
  selector: 'app-preview-electronics',
  templateUrl: './preview-electronics.component.html',
  styleUrls: ['./preview-electronics.component.scss','../../stylesheet/preview-style.scss']
})
export class PreviewElectronicsComponent implements OnInit {


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
products:any = [
  {
    imgUrl : '../../../../assets/images/grid1.png',
    alt: 'offer-1',
    imgName: 'Hair Care',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
     {
       reviewerName:'Murugan',
       rating :5,
       review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et.'
     },
     {
      reviewerName:'Akshay',
      rating :4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. '
    },
    {
      reviewerName:'Vishnu',
      rating :2,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. '
    },
    {
      reviewerName:'Nandhu',
      rating :4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. '
    },
    {
      reviewerName:'Ajesh',
      rating :3,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. '
    },
    {
      reviewerName:'Ajmal',
      rating :5,
     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. '
   },
    ]
  }

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

leftMenuDrawerOpened = true;
  ngOnInit(): void {

this.preview_sm1 =  '../../../../assets/images/chain3.jpeg';
this.preview_sm2 =  '../../../../assets/images/chain2.jpeg';
this.preview_sm3 =  '../../../../assets/images/chain1.jpeg';

//     this.route.queryParams.subscribe(items =>{
//       // console.log(items);
// const value =Object.entries(items)

// for(let idx=0;idx <value.length;idx++){


//   if(value[idx][0] === 'review'){
//     console.log(value[idx][1], typeof value[idx][1]);

//     this.reviewS = value[idx][1];
//   }
//   if(value[idx][0] === 'imgUrl'){
//     console.log(value[idx][1], typeof value[idx][1]);
//     this.preview_sm1=value[idx][1]
//   }
//   if(value[idx][0] === 'secondImage'){
//     console.log(value[idx][1], typeof value[idx][1]);
//     this.preview_sm2=value[idx][1]
//   }
//   if(value[idx][0] === 'thirdImage'){
//     console.log(value[idx][1], typeof value[idx][1]);
//     this.preview_sm3=value[idx][1]
//   }


// }
// });

this.preview_lg = this.preview_sm1;


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

