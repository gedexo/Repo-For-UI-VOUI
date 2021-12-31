import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import {  CarouselComponent, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MainService} from 'app/modules/service/main.service';
import { DOCUMENT } from '@angular/common';

import * as AOS from 'aos';
import {BehaviorSubject} from 'rxjs';
import { MatPaginator} from '@angular/material/paginator';
import { QueryData } from '../../../../../../../../shared/util/query-data';

import { MatSort, Sort } from '@angular/material/sort';
import { PAGE_SIZE_OPTIONS } from '../../../../util/constants';
import { MatTableDataSource } from '@angular/material/table';

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
  rating:number;
  Arrival_date : Date;
}

export interface subtasks {
  name: string;
  completed: boolean;

}
interface FoodNode {
  name: string;
  path: string;
}
@Component({
  selector: 'app-list-sport',
  templateUrl: './list-sport.component.html',
  styleUrls: ['./list-sport.component.scss',  '../../stylesheet/list-style.scss']
})
export class ListSportComponent implements OnInit {

  students$ = new BehaviorSubject<any[]>([]);
  filteredData = new BehaviorSubject<any[]>([]);
  subtasks: subtasks[] = [
    { name: 'Oppo', completed: false },
    { name: 'Vivo', completed: false },
    { name: 'Realme', completed: false },
  ];
  size: subtasks[] = [
    { name: 'one size ', completed: false },
    { name: 'S', completed: false },
    { name: 'M', completed: false },
    { name: 'L', completed: false },
    { name: 'XL', completed: false },
    { name: 'XXL', completed: false },
    { name: 'XXXl', completed: false },
  ];

  TREE_DATA: FoodNode[] = [
    {
      name: 'Accessories',
      path: 'Accessories',
    },
    {
      name: 'Coloring pRODUCTS',
      path: 'Coloring pRODUCTS',
    },
    {
      name: 'Cutting TOOLS',
      path: 'Cutting TOOLS',
    },
    {
      name: 'Hair Extensions',
      path: 'Hair Extensions',
    },
    {
      name: 'Wigs & Accessories',
      path: 'Wigs & Accessories',
    },
    {
      name: 'Hair Loss Products',
      path: 'Hair Loss Products',
    },
    {
      name: 'Scalp Treatments',
      path: 'Scalp Treatments',
    },
    {
      name: 'Styling Products',
      path: 'Styling Products',
    },
  ];
  offerSale: any = [
    {
      id : 1,
      imgUrl: '../../../../assets/images/haircare.jpg',
      alt: 'offer-1',
      imgName: 'Hair Care',
    },
    {
      id : 2,
      imgUrl: '../../../../assets/images/fragrence.jpg',
      alt: 'offer-2',
      imgName: 'Fragrance',
    },
    {
      id : 3,
      imgUrl: '../../../../assets/images/makeup.jpg',
      alt: 'offer-3',
      imgName: 'Make Up',
    },
    {
      id : 4,
      imgUrl: '../../../../assets/images/skincare.jpg',
      alt: 'offer-4',
      imgName: 'Skin Care',
    },
    {
      id : 5,
      imgUrl: '../../../../assets/images/nail.jpg',
      alt: 'arrival-1',
      imgName: 'Foot, Hand & Nail Care ',
      price: '€19.99',
    },
    {
      id : 6,
      imgUrl: '../../../../assets/images/tools.jpg',
      alt: 'arrival-2',
      imgName: 'Tools & Accessories',
      price: '€19.99',
    },
    {
      id : 7,
      imgUrl: '../../../../assets/images/hairRemovel.jpg',
      alt: 'arrival-3',
      imgName: 'Shave & Hair Removal',
      price: '€19.99',
    },
    {
      id : 8,
      imgUrl: '../../../../assets/images/arrival-1.png',
      alt: 'arrival-4',
      imgName: 'Personal Care',
      price: '€19.99',
    },

  ];

  products: productData[] = [
    {
      id: 1,
      imgUrl: '../../../../assets/images/grid1.png',
      alt: 'offer-1',
      imgName: 'Hair Care',
      price: 10,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 's',
      rating: 2,
      Arrival_date: new Date('Fri Dec 08 2019 07:44:57'),
      //   review:[
      //    {
      //      review1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //    },
      //    {
      //     review2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //   },
      //   {
      //     review3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //   },
      //   {
      //     review4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //   },
      //   {
      //     review5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //   },
      //   {
      //    review6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus amet tristique commodo nibh proin. Laoreet integer odio pretium semper posuere in purus tristique fringilla. Suspendisse nibh massa malesuada tristique posuere. Enim ac tempus interdum egestas justo et. Elementum augue amet adipiscing in massa nec vel massa in.'
      //  },
      //   ]
    },
    {
      id: 2,
      imgUrl: '../../../../assets/images/grid4.jpg',
      alt: 'offer-4',
      imgName: 'Skin Care',
      price: 20,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'realme',
      size: 'xl',
      rating: 5,
      Arrival_date: new Date('Fri Dec 08 2021 07:44:57'),
    },
    {
      id: 3,
      imgUrl: '../../../../assets/images/grid2.png',
      alt: 'offer-2',
      imgName: 'Fragrance',
      price: 19.99,
      secondImage: '../../../../assets/images/grid5.jpg',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'oppo',
      size: 'm',
      rating: 2,
      Arrival_date: new Date('Fri jan 08 2018 07:44:57'),
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
      id: 4,
      imgUrl: '../../../../assets/images/grid3.png',
      alt: 'offer-3',
      imgName: 'Fragrance',
      price: 50,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'realme',
      size: 'l',
      rating: 5,
      Arrival_date: new Date('Fri Dec 08 2011 07:44:57'),
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
      id: 5,
      imgUrl: '../../../../assets/images/grid8.jpg',
      alt: 'arrival-1',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 30,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 'xl',
      rating: 5,
      Arrival_date: new Date('Fri Dec 01 2019 07:44:57'),
    },
    {
      id: 6,
      imgUrl: '../../../../assets/images/grid4.jpg',
      alt: 'offer-4',
      imgName: 'Skin Care',
      price: 11,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'realme',
      size: 'xl',
      rating: 3,
      Arrival_date: new Date('Fri Dec 03 2019 07:44:57'),
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
      id: 7,
      imgUrl: '../../../../assets/images/grid5.jpg',
      alt: 'arrival-1',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 39,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'oppo',
      size: 'xxl',
      rating: 5,
      Arrival_date: new Date('Fri Dec 08 2020 07:44:57'),
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
      id: 8,
      imgUrl: '../../../../assets/images/grid1.png',
      alt: 'offer-1',
      imgName: 'Hair Care',
      price: 10,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 's',
      rating: 3,
      Arrival_date: new Date('Fri Dec 08 2019 07:44:57'),
    },
    {
      id: 9,
      imgUrl: '../../../../assets/images/grid9.jpg',
      alt: 'arrival-2',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 2,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 's',
      rating: 1,
      Arrival_date: new Date('Fri Dec 08 2019 07:44:57'),
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
      id: 10,
      imgUrl: '../../../../assets/images/grid6.jpg',
      alt: 'arrival-3',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 19.98,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'realme',
      size: 'm',
      rating: 5,
      Arrival_date: new Date('Fri Dec 08 2019 07:44:57'),
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
      id: 11,
      imgUrl: '../../../../assets/images/grid7.jpg',
      alt: 'arrival-4',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 59.99,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'oppo',
      size: 'l',
      rating: 2,
      Arrival_date: new Date('Fri Dec 01 2019 07:44:57'),

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
      id: 12,
      imgUrl: '../../../../assets/images/grid9.jpg',
      alt: 'arrival-2',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 1.99,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 's',
      rating: 3,
      Arrival_date: new Date('Fri Dec 01 2020 07:44:57'),
    },
    {
      id: 13,
      imgUrl: '../../../../assets/images/grid8.jpg',
      alt: 'arrival-1',
      imgName: 'Lorem ipsum dolor sit amet',
      price: 99,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 'xl',
      rating: 5,
      Arrival_date: new Date('Fri Dec 01 2022 07:44:57'),
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
      id: 14,
      imgUrl: '../../../../assets/images/grid1.png',
      alt: 'offer-1',
      imgName: 'Hair Care',
      price: 10,
      secondImage: '../../../../assets/images/grid2.png',
      thirdImage: '../../../../assets/images/grid3.png',
      Brand: 'vivo',
      size: 's',
      rating: 4,
      Arrival_date: new Date('Fri Dec 01 2019 07:44:57'),
    },
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
    startPosition:0,
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
  form: FormGroup;

  allComplete: boolean;

  isFirst = true;

  panelOpenState = false;
  totalItems: number;
  murugan = 0;
  section_title = 'Sport Section ';
  section_subtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut netus convallis ante ut mauris viverra.';



  slidesStore: any[];

  pageIndex = 0;

  pageSizeOptions: Array<number> = PAGE_SIZE_OPTIONS;

  onMain: boolean;
  @Input() messagelist: any[] = [];

  @ViewChild('username') input: ElementRef<HTMLInputElement> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort) sort: MatSort | any;

  loading: boolean = true;

  queryParams: QueryData = {};

  question: productData[] = [];
  questionS: productData[] = [];

  sortingArray: productData[] = [];

  filteredProducts: productData[] = this.products;

  dataSource: MatTableDataSource<productData>;

  nonAvailableProducts: boolean = false;

  sizeValue?: string;
  brandValue?: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly _snackBar: MatSnackBar,
    private readonly router: Router,
    private readonly mainService: MainService,
    private readonly activatedRoute:  ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.form = this.fb.group({
      startprice: new FormControl(0),
      endprice: new FormControl(50),
    });

    this.dataSource = new MatTableDataSource(this.products);
    this.allComplete = false;

    this.totalItems = 0;

    this.slidesStore = [];

    this.onMain = false;
  }

  isAlive = true;

  nextPageLabel = 'nextTick';

  public innerWidth: any;
  pageSize: number = 9;

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

  currencyType = 'USD';
  ngOnInit(): void {


  }

  dataSource$: any;
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource$ = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    }, 3000);

  }

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


  openSnackBar(action: string) {
    console.log(action);

    this._snackBar.open('1 item added to favourite list !', '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 700);
  }


  productPreview(event: productData): void {
    console.log(event);
    let link = ['offer/preview', event.id];
    this.router.navigate(link);


  }

  activeSlides: SlidesOutputData | any;
  onIndexxChange(data:any){
    console.log(data);

  }

  onIndexChange(data: SlidesOutputData) {
    this.activeSlides = data;
    this.activeSlides.slides = this.activeSlides.slides.filter((product:any) => {
      return product.center == true;
    });
   var splitted =  this.activeSlides.slides[0].id.split('-', 3);
   var centerPosition =parseInt(splitted);
   var activeSliderPosition = centerPosition - 1;
   var currentSlide = this.offerSale[activeSliderPosition].imgName
   console.log(currentSlide);
   this.router.navigate([], {
    queryParams: {
       currentSlide
    },

  });
  }



  filterbyBrand(params: string) {
    params = params.toLowerCase();

    this.sortingArray = [...this.dataSource.data];
    this.sortingArray = this.sortingArray.filter((product) => {
      return product.Brand === params;
    });

    this.questionS = [];
    for (let idx in this.products) {
      if (this.products[idx].Brand === params) {
        this.questionS.push(this.products[idx]);
        this.question = this.questionS;
      }
    }
    if (this.question.length === 0) {
      this.nonAvailableProducts = true;
    } else {
      this.nonAvailableProducts = false;
    }

    for (let idx in this.subtasks) {
      this.subtasks[idx].completed = false;
      console.log(this.subtasks[idx]);
    }
    this.dataSource.data = this.question;
    this.dataSource$ = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource$);
  }

  filterbySize(params: string) {
    params = params.toLowerCase();

    this.questionS = [];
    for (let idx in this.products) {
      if (this.products[idx].size === params) {
        this.questionS.push(this.products[idx]);
        this.question = this.questionS;
      }
    }
    if (this.question.length === 0) {
      this.nonAvailableProducts = true;
    } else {
      this.nonAvailableProducts = false;
    }

    for (let idx in this.size) {
      this.size[idx].completed = false;
    }
    this.dataSource.data = this.question;
    this.dataSource$ = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource$);
  }

  resetFilter(): void {
    console.log('hi');

    this.sizeValue = '';
    this.brandValue = '';

    this.dataSource.data = this.products;
    this.dataSource$ = this.dataSource.connect();
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
            new Date(b.Arrival_date).getTime() -
            new Date(a.Arrival_date).getTime()
          );
        });
        break;
      default:
      // code block
    }

    this.dataSource.data = this.sortingArray;
    this.dataSource$ = this.dataSource.connect();
  }


  innerCategoryRoute(subCategory:string){
    // console.log(subCategory);
    const queryParams: Params = { subCategory: subCategory };
    console.log(this.activatedRoute.queryParams );

    this.router.navigate([], {
      relativeTo: this.activatedRoute ,
      queryParams: queryParams,
      queryParamsHandling: 'merge'

    });
  }
}
