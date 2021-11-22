
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import {VERSION} from '@angular/material';

interface currencies {
  value: string;
  name: string;

}
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
        name: 'Units'
      },
      {
        path: 'tax',
        name: 'Taxes'
      },
      {
        path: 'category',
        name: 'Categories'
      },
      {
        path: 'product',
        name: 'Products'
      },
    ]
  },

  {
    path: 'sale',
    name: 'Sale',
    icon: 'paid',
    default: false,
    children: [
      {
        path: 'invoice',
        name: 'Invoices'
      },
      {
        path: 'revenue',
        name: 'Revenues'
      },
      {
        path: 'customer',
        name: 'Customers'
      },
    ]
  },
  {
    path: 'haircare',
    name: 'haircare',
    icon: 'shopping_cart',
    default: true,
    children: [
      {
        path: 'hair',
        name: 'hair'
      },
      {
        path: 'hair',
        name: 'hair'
      },
      {
        path: 'hair',
        name: 'hair'
      },
    ]
  },
  {
    path: 'banking',
    name: 'Banking',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'bank',
        name: 'Banks'
      },
      {
        path: 'hair',
        name: 'hair'
      },
      {
        path: 'transfer',
        name: 'Transfers'
      },
      {
        path: 'transaction',
        name: 'Transactions'
      },
    ]
  },
  {
    path: 'accounts',
    name: 'Accounts',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'ledgerGroup',
        name: 'Ledger Group'
      },
      {
        path: 'hair',
        name: 'hair'
      },
      {
        path: 'ledger',
        name: 'Ledger'
      },
      {
        path: 'voucher',
        name: 'Voucher'
      },
      {
        path: 'cost-centre',
        name: 'Cost Centre'
      },
    ]
  },

  {
    path: 'setting',
    name: 'Settings',
    icon: 'settings',
    default: false,
    children: [
      {
        path: 'branch',
        name: 'Branch'
      },
      {
        path: 'company',
        name: 'Company'
      },
      {
        path: 'fin-year',
        name: 'Fin Year'
      },
      {
        path: 'user',
        name: 'User'
      },
      {
        path: 'hair',
        name: 'hair'
      },
    ]
  }
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
        name: 'Units'
      },
      {
        path: 'tax',
        name: 'Taxes'
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products'
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools'
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions'
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories'
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products'
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms'
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss'
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils'
      },  {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products'
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools'
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions'
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories'
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products'
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms'
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss'
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils'
      },
      {
        path: 'hair',
        name: 'hair'
      },
      {
        path: 'category',
        name: 'Categories'
      },
      {
        path: 'product',
        name: 'Products'
      },
    ]
  },

  {
    path: 'sale',
    name: 'Sale',
    icon: 'paid',
    default: false,
    children: [
      {
        path: 'invoice',
        name: 'Invoices'
      },
      {
        path: 'revenue',
        name: 'Revenues'
      },
      {
        path: 'customer',
        name: 'Customers'
      },
    ]
  },
  {
    path: 'haircare',
    name: 'haircare',
    icon: 'shopping_cart',
    default: true,
    children: [
      {
        path: 'Hair Accessories',
        name: 'Hair Accessories'
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products'
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools'
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions'
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories'
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products'
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms'
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss'
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils'
      },
      {
        path: 'Scalp Treatments',
        name: 'Scalp Treatments'
      },
      {
        path: 'Shampoo & Conditioner',
        name: 'Shampoo & Conditioner'
      },
      {
        path: 'Styling Products',
        name: 'Styling Products'
      },
      {
        path: 'Styling Tools & Appliances',
        name: 'Styling Tools & Appliances'
      },
      {
        path: 'Hair Accessories',
        name: 'Hair Accessories'
      },

    ]
  },
  {
    path: 'banking',
    name: 'Banking',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'bank',
        name: 'Banks'
      },
      {
        path: 'transfer',
        name: 'Transfers'
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products'
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools'
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions'
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories'
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products'
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms'
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss'
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils'
      },
      {
        path: 'transaction',
        name: 'Transactions'
      },
    ]
  },
  {
    path: 'accounts',
    name: 'Accounts',
    icon: 'business_center',
    default: false,
    children: [
      {
        path: 'ledgerGroup',
        name: 'Ledger Group'
      },
      {
        path: 'ledger',
        name: 'Ledger'
      },
      {
        path: 'voucher',
        name: 'Voucher'
      },
      {
        path: 'cost-centre',
        name: 'Cost Centre'
      },
    ]
  },

  {
    path: 'setting',
    name: 'Settings',
    icon: 'settings',
    default: false,
    children: [
      {
        path: 'branch',
        name: 'Branch'
      },
      {
        path: 'company',
        name: 'Company'
      },
      {
        path: 'fin-year',
        name: 'Fin Year'
      },
      {
        path: 'Hair Coloring Products',
        name: 'Hair Coloring Products'
      },
      {
        path: 'Hair Cutting Tools',
        name: 'Hair Cutting Tools'
      },
      {
        path: 'Hair Extensions',
        name: 'Hair Extensions'
      },
      {
        path: 'Wigs & Accessories',
        name: 'Wigs & Accessories'
      },
      {
        path: 'Hair Loss Products',
        name: 'Hair Loss Products'
      },
      {
        path: 'Hair Masks-Hair Perms',
        name: 'Hair Masks-Hair Perms'
      },
      {
        path: 'Relaxers & Texturizerss',
        name: 'Relaxers & Texturizerss'
      },
      {
        path: 'Hair Treatment Oils',
        name: 'Hair Treatment Oils'
      },
      {
        path: 'user',
        name: 'User'
      },
    ]
  }
];



const Empty_DATA: FooddNode[] = [];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = 'murugan';
  no_of_items = 5;
  showArrow = false;

  mega_menu = 'hide_mega_menu'

  offer_button = "nav_link";
  brand_button = "nav_link";
  beauty_button = "nav_link";
  fashion_button = "nav_link";
  sport_button = "nav_link";
  electronics_button = "nav_link";
  household_button = "nav_link";
  petsupply_button = "nav_link";
  automoto_button = "nav_link";


  activeNode: FooddNode[] = Empty_DATA;
  childrenNode: FooddNode[] = Empty_DATA;
  new_Date: FooddNode[] = [];





  constructor(private router: Router) { }

  form: FormGroup = new FormGroup({
    currency: new FormControl('Euro'),
  });



  ngOnInit(): void {
    this.showArrow = false;

  }

  ClosePanel(): void {
    this.activeNode = Empty_DATA;
   this.childrenNode = Empty_DATA;

  }

  openBrandMenu(event: any, value: any): void {
    console.log(value);
    

    switch (value) {

      case 'offer':


          this.activeNode = BRAND_DATA;

          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);


            }
          }

        break;

      case 'brand':
          this.activeNode = TREE_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
         

            }
        


        }

        break;

      case 'beauty':
  

          this.activeNode = BRAND_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
            

            }
          }


        break;

      case 'fashion':

          this.activeNode = TREE_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
             

            }
          }

        break;

      case 'sports':


          this.activeNode = BRAND_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
            

            }
          }

        break;

      case 'electronics':


          this.activeNode = TREE_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
             

            }
          }


        break;

      case 'houshold':


          this.activeNode = BRAND_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
             

            }
          }

        break;

      case 'petSupplies':

          this.activeNode = TREE_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
              this.loadChild(event);
            

            }
          }

        break;

      case 'autoMoto':


          this.activeNode = BRAND_DATA;
          for (let idx = 0; idx < this.activeNode.length; idx++) {
            if (this.activeNode[idx].default === true) {
              const event = this.activeNode[idx].name;
            
              this.loadChild(event);

            }
          }
        break;



    }
    console.log(this.activeNode);
  }




  loadChild(event: any) {
    this.new_Date = this.filterData(event);

    this.childrenNode = this.new_Date;
  
    


  }
  filterData(event: string) {

    return this.activeNode.filter(object => {

      return object['path'] == event;

    })

  }


}
