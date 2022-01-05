import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import * as AOS from 'aos';
import { PreviewProductService } from 'app/modules/service/productServices/preview-product.service';
import { DashboardService } from 'app/modules/service/dashboard.service';


export interface subtasks {
  name: string;
  Available: boolean;

}


@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.scss']
})
export class PreviewProductComponent implements OnInit {

  product_name:string='';
  product_price:number = 0;
  offer_price:number=0;
  offer_percentage:number = 0;
  product_options:any[]=[];
  imageWithColor:any;
  products:any[]=[];

  @Input() article: any;
  articleList: any[] = [];


  product:Array<string>=[];
  reviewS:any;
  images:any;
  sizeValue:string ='';

  preview_sm1:string ='';
  preview_sm2:string ='';
  preview_sm3:string ='';
  preview_lg:string ='';


  aboutProduct = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla.Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et.';

isFirst = false;

panelOpenState = false;
  size: any[] = [];

colors: any[] =[];



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
offerSale:any[] = []

  constructor(
              private activatedRoute: ActivatedRoute,
              private readonly router:Router,
              private _snackBar: MatSnackBar,
              private dashboardService :DashboardService,
              private previewProductService: PreviewProductService,) {

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

    this.dashboardService.getOfferSales().subscribe((data: any) =>{
      this.offerSale = data;
      console.log(data);

   })
    this.activatedRoute.params.subscribe(params =>{
      var id = Number.parseInt(params['id']);
      this.previewProductService.getDataofSubSubCategory(id).subscribe(data =>{



            this.product_name = data.name;
            this.product_price = data.price;
            this.offer_price = data.offerPrice;
            this.offer_percentage= data.offerPercentage;
            this.product_options = data['options'];
            this.product_options.forEach(element => {
              this.colors.push(element['color']);
            });
            this.changeColor(this.colors[0]);

      })

    })




}

changelgImage(event:any):void{
  this.preview_lg = event;
}

addtocart(): void {


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

changePreviewImage = (smImage: any) => this.preview_lg = smImage;


changeColor(color:string){
  console.log(color);


  this.product_options.forEach(element => {



    if(element['color'] === color){
      this.setSize(element.sizes);
      this.size = element.sizes;



     var image1 =element['image_one'];
      var image2 = element['image_two'];
      var image3 = element['image_three'];
      var result1 = Object.keys(image1).map((key) => [image1[key]]);
      var result2 = Object.keys(image2).map((key) => [image2[key]]);
      var result3 = Object.keys(image3).map((key) => [image3[key]]);
      this.preview_sm1=result1[1][0];
      this.preview_sm2=result2[1][0];
      this.preview_sm3 =result3[1][0];
      this.preview_lg =this.preview_sm1;

    }

});

}

openSnackBar(){
  this._snackBar.open('1 item added to favourite list !', '', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
  });
  setTimeout(() => {
    this._snackBar.dismiss();
  }, 700);
}
setSize(data:any){
  console.log(data);


}
changed(){

}

}


