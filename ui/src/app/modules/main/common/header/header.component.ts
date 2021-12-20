import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'app/modules/service/main.service';
import { MatSidenav } from '@angular/material/sidenav';
import 'boxicons';
import * as AOS from 'aos';
declare var $:JQueryStatic;


interface childNode {
  path: string;
  name: string;
  icon?: string;
}

interface FooddNode {
  path: string;
  name: string;
  icon?: string;
  default: boolean;
  children?: childNode[];
}

const TREE_DATA: FooddNode[] = [
  {
    path: 'item',
    name: 'Item',
    icon: 'layers',
    default: false,
    children: [
      {
        path: 'unit',
        name: 'Units',
      },
      {
        path: 'tax',
        name: 'Taxes',
      },
      {
        path: 'category',
        name: 'Categories',
      },
      {
        path: 'product',
        name: 'Products',
      },
    ],
  },

  {
    path: 'sale',
    name: 'Sale',
    icon: 'paid',
    default: false,
    children: [
      {
        path: 'invoice',
        name: 'Invoices',
      },
      {
        path: 'revenue',
        name: 'Revenues',
      },
      {
        path: 'customer',
        name: 'Customers',
      },
    ],
  },
  {
    path: 'haircare',
    name: 'haircare',
    icon: 'shopping_cart',
    default: true,
    children: [
      {
        path: 'hair',
        name: 'hair',
      },
      {
        path: 'hair',
        name: 'hair',
      },
      {
        path: 'hair',
        name: 'hair',
      },
    ],
  },
  {
    path: 'banking',
    name: 'Banking',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'bank',
        name: 'Banks',
      },
      {
        path: 'hair',
        name: 'hair',
      },
      {
        path: 'transfer',
        name: 'Transfers',
      },
      {
        path: 'transaction',
        name: 'Transactions',
      },
    ],
  },
  {
    path: 'accounts',
    name: 'Accounts',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'ledgerGroup',
        name: 'Ledger Group',
      },
      {
        path: 'hair',
        name: 'hair',
      },
      {
        path: 'ledger',
        name: 'Ledger',
      },
      {
        path: 'voucher',
        name: 'Voucher',
      },
      {
        path: 'cost-centre',
        name: 'Cost Centre',
      },
    ],
  },

  {
    path: 'setting',
    name: 'Settings',
    icon: 'settings',
    default: false,
    children: [
      {
        path: 'branch',
        name: 'Branch',
      },
      {
        path: 'company',
        name: 'Company',
      },
      {
        path: 'fin-year',
        name: 'Fin Year',
      },
      {
        path: 'user',
        name: 'User',
      },
      {
        path: 'hair',
        name: 'hair',
      },
    ],
  },
];

const BRAND_DATA: FooddNode[] = [
  {
    path: 'item',
    name: 'Item',
    icon: 'layers',
    default: false,
    children: [
      {
        path: 'unit',
        name: 'Units',
      },
      {
        path: 'tax',
        name: 'Taxes',
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products',
      },

      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products',
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms',
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss',
      },

      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories',
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products',
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms',
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss',
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils',
      },
      {
        path: 'hair',
        name: 'hair',
      },
      {
        path: 'category',
        name: 'Categories',
      },
      {
        path: 'product',
        name: 'Products',
      },
    ],
  },

  {
    path: 'sale',
    name: 'Sale',
    icon: 'paid',
    default: false,
    children: [
      {
        path: 'invoice',
        name: 'Invoices',
      },
      {
        path: 'revenue',
        name: 'Revenues',
      },
      {
        path: 'customer',
        name: 'Customers',
      },
    ],
  },
  {
    path: 'haircare',
    name: 'haircare',
    icon: 'shopping_cart',
    default: true,
    children: [
      {
        path: 'Hair Accessories',
        name: 'Hair Accessories',
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products',
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools',
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions',
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories',
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products',
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms',
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss',
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils',
      },
      {
        path: 'Scalp Treatments',
        name: 'Scalp Treatments',
      },
      {
        path: 'Shampoo & Conditioner',
        name: 'Shampoo & Conditioner',
      },
      {
        path: 'Styling Products',
        name: 'Styling Products',
      },
      {
        path: 'Styling Tools & Appliances',
        name: 'Styling Tools & Appliances',
      },
      {
        path: 'Hair Accessories',
        name: 'Hair Accessories',
      },
    ],
  },
  {
    path: 'banking',
    name: 'Banking',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'bank',
        name: 'Banks',
      },
      {
        path: 'transfer',
        name: 'Transfers',
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products',
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools',
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions',
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories',
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products',
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms',
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss',
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils',
      },
      {
        path: 'transaction',
        name: 'Transactions',
      },
    ],
  },
  {
    path: 'accounts',
    name: 'Accounts',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'ledgerGroup',
        name: 'Ledger Group',
      },
      {
        path: 'ledger',
        name: 'Ledger',
      },
      {
        path: 'voucher',
        name: 'Voucher',
      },
      {
        path: 'cost-centre',
        name: 'Cost Centre',
      },
    ],
  },

  {
    path: 'setting',
    name: 'Settings',
    icon: 'settings',
    default: false,
    children: [
      {
        path: 'branch',
        name: 'Branch',
      },
      {
        path: 'company',
        name: 'Company',
      },
      {
        path: 'fin-year',
        name: 'Fin Year',
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products',
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools',
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions',
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories',
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products',
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms',
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss',
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils',
      },
      {
        path: 'user',
        name: 'User',
      },
    ],
  },
];

export interface subtasks {
  name: string;
  completed: boolean;
}

const Empty_DATA: FooddNode[] = [];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  loginTitle = "Login"
  user = 'murugan';
  no_of_items = 5;
  showArrow = false;

  showFiller = false;

  mega_menu = 'hide_mega_menu';

  offer_button = 'nav_link';
  brand_button = 'nav_link';
  beauty_button = 'nav_link';
  fashion_button = 'nav_link';
  sport_button = 'nav_link';
  electronics_button = 'nav_link';
  household_button = 'nav_link';
  petsupply_button = 'nav_link';
  automoto_button = 'nav_link';

  activeNode: FooddNode[] = Empty_DATA;
  childrenNode: FooddNode[] = Empty_DATA;
  new_Date: FooddNode[] = [];

  toggle_class = false;
  shopAll = '';
  fontStyle?: string;

  size: subtasks[] = [
    { name: 'FR ', completed: false },
    { name: 'En', completed: false },
  ];

  message: string = "Hola Mundo!"



  @Output() messageEvent = new EventEmitter<string>();

  @ViewChild('rightSidenav', {static: true}) sidenav: MatSidenav | any;

  @ViewChild('drawer') drawer: MatSidenav | any;

  @HostListener('document:click', ['$event']) onDocumentClick(event:any) {
    if(this.drawer.open()){
    this.drawer.close();
    }
    if(this.mainService.open()){
      this.mainService.close();
    }

  }


  quantity: number;



  constructor(private router: Router,
    private readonly mainService:MainService,) {
    this.quantity = 1;

  }

  form: FormGroup = new FormGroup({
    currency: new FormControl('Euro'),
  });

  searchForm: FormGroup = new FormGroup({
    inputValue: new FormControl(''),
  });

  ngOnInit(): void {
    this.showArrow = false;
    this.toggle_class = false;

    AOS.init();

  }



  ClosePanel(): void {
    this.activeNode = Empty_DATA;
    this.childrenNode = Empty_DATA;
  }

  openBrandMenu(event: any, value: any): void {
    switch (value) {
      case 'offer':
        this.shopAll = '/offer';

        this.activeNode = BRAND_DATA;

        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
            this.toggle_class = true;

            break;
          } else {
            this.toggle_class = false;
          }
        }

        break;

      case 'brand':
        this.shopAll = '/brand';
        this.activeNode = TREE_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'beauty':
        this.shopAll = '/beauty';
        this.activeNode = BRAND_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'fashion':
        this.shopAll = '/fashion';
        this.activeNode = TREE_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'sports':
        this.shopAll = '/sport';
        this.activeNode = BRAND_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'electronics':
        this.shopAll = '/electronics';
        this.activeNode = TREE_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'houshold':
        this.shopAll = '/household';
        this.activeNode = BRAND_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'petSupplies':
        this.shopAll = '/petsupply';
        this.activeNode = TREE_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;
            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }

        break;

      case 'autoMoto':
        this.shopAll = '/automoto';
        this.activeNode = BRAND_DATA;
        for (let idx = 0; idx < this.activeNode.length; idx++) {
          if (this.activeNode[idx].default === true) {
            const event = this.activeNode[idx].name;

            this.new_Date = this.filterData(event);
            this.childrenNode = this.new_Date;
          }
        }
        break;
    }
  }

  loadChild(event: any) {
    this.new_Date = this.filterData(event);
    this.childrenNode = this.new_Date;
    this.toggle_class = false;
  }
  toggleChild(event: any): void {
    for (let idx = 0; idx < this.activeNode.length; idx++) {
      if (this.activeNode[idx].default === true) {
        const event = this.activeNode[idx].name;

        this.new_Date = this.filterData(event);
        this.childrenNode = this.new_Date;
      }
    }
  }
  filterData(event: string) {
    return this.activeNode.filter((object) => {
      this.toggle_class = true;

      return object['path'] == event;
    });
  }

  upsertSearch(): void {
    console.log(this.searchForm.value);
  }
  toggleLanguage(language:string): void {
    console.log(language);

  }

	toggleActive = false;

	toggleRightSidenav() {
console.log('hi');

    this.mainService.open();
	}

  changeCurrency(value:any):void{
this.mainService.currencyType = value;

  }
  close(event:any){
    console.log('closed');

  }


}
