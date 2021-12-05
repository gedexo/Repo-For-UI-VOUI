import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss',]
})
export class WishlistComponent implements OnInit {


products:any = [
  {
    "imgUrl" : '../../../../assets/images/grid1.png',
    "alt": 'offer-1',
    "imgName": 'Gold necklaceFaux Pearl Decor Y Lariat Necklace 12 euro',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
     {
       "reviewerName":'murugan',
       "rating":2,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":4,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":5,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":3,
     "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
   },
    ]
},
  {
    "imgUrl" : '../../../../assets/images/grid2.png',
    "alt": 'offer-2',
    "imgName": 'Fragrance',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid5.jpg',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":2,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":2,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":4,
     "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
   },

     ]

  },
  {
    "imgUrl" : '../../../../assets/images/grid3.png',
    "alt": 'offer-3',
    "imgName": 'Fragrance',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":2,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":4,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]

  },
  {
    "imgUrl" : '../../../../assets/images/grid4.jpg',
    "alt": 'offer-4',
    "imgName": 'Skin Care',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":5,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":2,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]

  },
  {
    "imgUrl" : '../../../../assets/images/grid5.jpg',
    "alt": 'arrival-1',
    "imgName": 'Lorem ipsum dolor sit amet',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":5,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     ]
  },
  {
    "imgUrl" : '../../../../assets/images/grid9.jpg',
    "alt": 'arrival-2',
    "imgName": 'Lorem ',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":1,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":2,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },

     ]
  },
  {
    "imgUrl" : '../../../../assets/images/grid6.jpg',
    "alt": 'arrival-3',
    "imgName": 'Lorem ipsum dolor sit amet',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":3,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":3,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":5,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":4,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },

     ]
  },
  {
    "imgUrl" : '../../../../assets/images/grid7.jpg',
    "alt": 'arrival-4',
    "imgName": 'Lorem ipsum dolor sit amet',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":2,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":4,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":5,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },


     ]

  },
  {
    "imgUrl" : '../../../../assets/images/grid8.jpg',
    "alt": 'arrival-1',
    "imgName": 'Lorem ipsum dolor sit amet',
    "price" : '19.99',
    "secondImage": '../../../../assets/images/grid2.png',
    "thirdImage": '../../../../assets/images/grid3.png',
    "review":[
      {
        "reviewerName":'murugan',
       "rating":3,
        "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      },
      {
        "reviewerName":'murugan',
       "rating":1,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":2,
       "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
     },
     {
      "reviewerName":'murugan',
      "rating":3,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },
    {
      "reviewerName":'murugan',
       "rating":5,
      "review": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
    },

     ]
  },


]

  constructor( private _snackBar: MatSnackBar,
    public readonly router: Router,) { }

  ngOnInit(): void {
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
    this.router.navigateByUrl('offer/preview', { state:event});

    // this.router.navigate(['offer/preview'],{ queryParams: {
    //   burl:event} });
  }
}
