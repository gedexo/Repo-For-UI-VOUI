import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface FoodNode {
  name: string;
  path: string;
}

export interface subtasks {
  name: string;
  completed: boolean;

}



@Component({
  selector: 'app-list-automoto',
  templateUrl: './list-automoto.component.html',
  styleUrls: ['./list-automoto.component.scss', '../../stylesheet/list-style.scss']
})
export class ListAutomotoComponent implements OnInit {
  totalItems :number ;
  murugan =0;
  offer_title ="Auto Moto Section title";
  offer_subtitle ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut netus convallis ante ut mauris viverra."


  subtasks: subtasks[] = [
      {name: 'Primary', completed: false},
      {name: 'Accent', completed: false},
      {name: 'Warn', completed: false},

  ];
  size: subtasks[] = [
    {name: 'one size ', completed: false},
    {name: 'S', completed: false},
    {name: 'M', completed: false},
    {name: 'L', completed: false},
    {name: 'XL', completed: false},
    {name: 'XXL', completed: false},
    {name: 'XXl', completed: false},

];

  panelOpenState = false;

  TREE_DATA: FoodNode[] = [
    {
      name: 'Accessories',
      path:'Accessories'
    },
     {
      name: 'Coloring pRODUCTS',
      path:'Coloring pRODUCTS'
    },
    {
      name: 'Cutting TOOLS',
      path:'Cutting TOOLS'
    },
    {
      name: 'Hair Extensions',
      path:'Hair Extensions'
    },
    {
      name: 'Wigs & Accessories',
      path:'Wigs & Accessories'
    },
    {
      name: 'Hair Loss Products',
      path:'Hair Loss Products'
    },
    {
      name: 'Scalp Treatments',
      path:'Scalp Treatments'
    },
    {
      name: 'Styling Products',
      path:'Styling Products'
    },


  ];
offerSale:any = [
  {
    imgUrl : '../../../../assets/images/haircare.jpg',
    alt: 'offer-1',
    imgName: 'Hair Care',

  },
  {
    imgUrl : '../../../../assets/images/fragrence.jpg',
    alt: 'offer-2',
    imgName: 'Fragrance',

  },
  {
    imgUrl : '../../../../assets/images/fragrence.jpg',
    alt: 'offer-3',
    imgName: 'Fragrance',

  },
  {
    imgUrl : '../../../../assets/images/skincare.jpg',
    alt: 'offer-4',
    imgName: 'Skin Care',

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

]


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
       review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
     review6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
   },
    ]
},
  {
    imgUrl : '../../../../assets/images/grid2.png',
    alt: 'offer-2',
    imgName: 'Fragrance',
    price : '19.99',
    secondImage: '../../../../assets/images/grid5.jpg',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
     review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
   },

     ]

  },
  {
    imgUrl : '../../../../assets/images/grid3.png',
    alt: 'offer-3',
    imgName: 'Fragrance',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]

  },
  {
    imgUrl : '../../../../assets/images/grid4.jpg',
    alt: 'offer-4',
    imgName: 'Skin Care',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]

  },
  {
    imgUrl : '../../../../assets/images/grid5.jpg',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     ]
  },
  {
    imgUrl : '../../../../assets/images/grid9.jpg',
    alt: 'arrival-2',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]
  },
  {
    imgUrl : '../../../../assets/images/grid6.jpg',
    alt: 'arrival-3',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },

     ]
  },
  {
    imgUrl : '../../../../assets/images/grid7.jpg',
    alt: 'arrival-4',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },


     ]

  },
  {
    imgUrl : '../../../../assets/images/grid8.jpg',
    alt: 'arrival-1',
    imgName: 'Lorem ipsum dolor sit amet',
    price : '19.99',
    secondImage: '../../../../assets/images/grid2.png',
    thirdImage: '../../../../assets/images/grid3.png',
    review:[
      {
        review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
       review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
       review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },

     ]
  },


]


offerOptions: OwlOptions = {

  loop:true,
  margin:10,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 500,
  center:true,
  navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
  responsive: {
    0:{
      items:1,
      nav:true
  },
  600:{
      items:3,
      nav:false,

  },
  1000:{
      items:3,
      nav:true,
      loop:true,
      autoplay :false,
      margin:40
  }
  },
  nav: true
}
form: FormGroup;

  allComplete: boolean;

  isFirst = true;



  constructor(private readonly fb: FormBuilder,
              private _snackBar: MatSnackBar,
              public readonly router: Router,) {
    this.form = this.fb.group({
      startprice: new FormControl(),
      endprice: new FormControl(),


    });
    this.allComplete = false;

   this.totalItems = 0;

  }

nextPageLabel = 'nextTick';


  ngOnInit(): void {}
    submit(){
      console.log(this.form.value);
      console.log(this.subtasks);
      console.log(this.size);


    }

    openSnackBar( action: string) {
      console.log(action);

      this._snackBar.open('1 item added to favourite list !', '',{
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      setTimeout(()=>{
        this._snackBar.dismiss()
    }, 700)

    }

    productPreview(event:any):void{
      console.log(event);
      this.router.navigateByUrl('preview', { state: event });
    }
  }
