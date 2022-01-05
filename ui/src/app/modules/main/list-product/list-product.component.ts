import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CarouselComponent,
  OwlOptions,
  SlidesOutputData,
} from 'ngx-owl-carousel-o';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from '@angular/router';
import { MainService } from 'app/modules/service/main.service';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListBeautyService } from 'app/modules/service/productServices/list-beauty.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
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
    this.loading = true;
    this.products = [];

    this.activatedRoute.queryParams.subscribe((params) => {

      this.hparam = params;
      this.subsubId = Number.parseInt(params['subsubId']);
      this.subsubId = params['subsubId'];
      this.setdefaultData(params['id']);
    });
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource$ = this.dataSource.connect();
    this.loading = false;
  }

  setdefaultData(id: number) {
    this.listBeautyService.getDataofMainCategory(id).subscribe((data) => {


      this.section_title = data.name;
      this.mainCategory = data.subcategories;
    });
  }

  onIndexChange(data: SlidesOutputData) {


    if (data.slides == undefined) {
      return;
    } else {

      if(this.isFirst === false){
        var subId = Number.parseInt(data.slides[0].id);
      }
      else{
        var subId = Number.parseInt(data.slides[1].id);
      }

      if (subId === undefined) {
        return;
      } else {
        this.getProductData(subId);
      }
    }
  }

  getProductData(subId: number) {
    this.loading = true;

    this.listBeautyService.getDataofSubCategory(subId).subscribe((data) => {
      this.subCategoryName = data.name;
      this.filterCategory = data.subsubcategories;
      if (this.subsubId !== undefined) {
        this.innerCategoryRoute(this.subsubId);
      } else {
        this.products = [];

        this.filterCategory.forEach((element) => {
          for (let index = 0; index < element.products.length; index++) {
            this.products.push(element.products[index]);
          }
        });
      }

      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource$ = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
    });
    this.loading = false;
  }

  innerCategoryRoute(subsubId: number) {
    this.products = [];
    this.listBeautyService
      .getDataofSubSubCategory(subsubId)
      .subscribe((data) => {
        this.products = data['products'];
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource$ = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
      });
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
          return a.price - b.price;
        });
        break;
      case 'HighToLow':
        this.sortingArray.sort(function (a: any, b: any) {
          return b.price - a.price;
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

  filterbySize(params: string) {
    params = params.toLowerCase();
    var questionS: any = [];
    var question: any = [];
    this.products.forEach((element: { [x: string]: any }) => {

      if (params === element['options'][0].size) {
        questionS.push(element);
        question = questionS;
      }
    });

    if (question.length === 0) {
      this.nonAvailableProducts = true;
    } else {
      this.nonAvailableProducts = false;
    }

    for (let idx in this.size) {
      this.size[idx].completed = false;
    }


    this.dataSource.data = question;
    this.dataSource$ = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;

  }

  resetCarousal() {}

  filterbyBrand(params: string) {}

  submit() {
    const minimumPrice = this.form.get('startprice')?.value;
    const maximumPrice = this.form.get('endprice')?.value;
    this.sortingArray = [...this.dataSource.data];
    this.sortingArray = this.sortingArray.filter((product) => {
      return product.price >= minimumPrice && product.price <= maximumPrice;
    });

    this.dataSource.data = this.sortingArray;
    this.dataSource$ = this.dataSource.connect();
  }

  productPreview(id: number): void {

    let link = ['previewProduct', id];
    this.router.navigate(link);
  }
}
