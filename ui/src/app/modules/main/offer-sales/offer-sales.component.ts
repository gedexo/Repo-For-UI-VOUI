import {Component,HostListener, Inject, OnInit, ViewChild,} from '@angular/core';
import { OwlOptions, SlidesOutputData,
} from 'ngx-owl-carousel-o';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute,Router,
} from '@angular/router';
import { MainService } from 'app/modules/service/main.service';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListBeautyService } from 'app/modules/service/productServices/list-beauty.service';
import { DashboardService } from 'app/modules/service/dashboard.service';

@Component({
  selector: 'app-offer-sales',
  templateUrl: './offer-sales.component.html',
  styleUrls: ['./offer-sales.component.scss']
})
export class OfferSalesComponent implements OnInit {
  form: FormGroup;
  section_title?: string;
  section_subtitle?: string;
  subCategoryName?: string;
  sizeValue?: string;
  brandValue?: string;
  currencyType: string = 'USD';
  date: any = '';
  nonAvailableProducts: boolean = false;
  loading: boolean = false;
  totalItems: number = 0;
  panelOpenState = false;
  isFirst = true;
  dataSource: MatTableDataSource<any>;
  dataSource$: any;
  filterCategory: any[] = [];
  mainCategory: any[] = [];
  products: any = [];
  sortingArray: any[] = [];
  hparam: any;
  subsubId: number = 0;
  pageSize: number = 9;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  subtasks: any[] = [
    { name: 'Oppo', completed: false },
    { name: 'Vivo', completed: false },
    { name: 'Realme', completed: false },
  ];
  size: any[] = [
    { name: 'one size ', completed: false },
    { name: 'S', completed: false },
    { name: 'M', completed: false },
    { name: 'L', completed: false },
    { name: 'XL', completed: false },
    { name: 'XXL', completed: false },
    { name: 'XXXl', completed: false },
  ];

  offerOptions: OwlOptions = {
    loop: true,
    margin: 40,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    center: true,
    URLhashListener: false,
    startPosition: 'URLHash',
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],

    responsive: {
      0: {
        items: 1,
        nav: true,
      },

      769: {
        items: 3,
        nav: true,
        loop: true,
        autoplay: false,
        margin: 40,
      },
    },

    nav: true,
  };

  constructor(
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar,
    private readonly router: Router,
    private readonly mainService: MainService,
    private readonly listBeautyService: ListBeautyService,
    private readonly activatedRoute: ActivatedRoute,
    private dashboardService :DashboardService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.form = this.fb.group({
      startprice: new FormControl(0),
      endprice: new FormControl(50),
    });
    this.dataSource = new MatTableDataSource(this.products);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    AOS.init();
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    if (window.innerWidth <= 768) {
      this.isFirst = false;
    }else {
      this.isFirst = true;
      this.pageSize = 12;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 768) {
      this.isFirst = false;
    } else {
      this.isFirst = true;
      this.pageSize = 12;
    }
  }
  ngOnInit(): void {

    this.dashboardService.getOfferSales().subscribe((data: any) =>{
      this.products  = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource$ = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;

   })



  }
  changeSorting(value: string): void {
    this.sortingArray = [...this.dataSource.data];
    switch (value) {
      case 'rating':
        this.sortingArray.sort(function (a: any, b: any) {
          return a.rating - b.rating;
        });

        break;
      case 'LowToHigh':
        this.sortingArray.sort(function (a: any, b: any) {
          return a.offerPercentage - b.offerPercentage;
        });
        break;
      case 'HighToLow':
        this.sortingArray.sort(function (a: any, b: any) {
          return b.offerPercentage - a.offerPercentage;
        });
        break;
      case 'latest':
        this.sortingArray.sort(function (a: any, b: any) {
          return (
            new Date(b.created_date).getTime() -
            new Date(a.created_date).getTime()
          );
        });
        break;
      default:
      // code block
    }

    this.dataSource.data = this.sortingArray;
    this.dataSource$ = this.dataSource.connect();
  }

  resetFilter(): void {
    this.sizeValue = '';
    this.brandValue = '';
    this.dataSource.data = this.products;
    this.dataSource$ = this.dataSource.connect();
  }

  openSnackBar(action: string) {
    this._snackBar.open('1 item added to favourite list !', '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 700);
  }

  productPreview(id: number): void {

    let link = ['previewProduct', id];
    this.router.navigate(link);
  }
}
