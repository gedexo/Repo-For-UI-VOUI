
import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import { FormBuilder, FormGroup } from '@angular/forms';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Categories',
    children: [
      {name: 'Accessories'},
      {name: 'Coloring product'},
      {name: 'Cutting TOOLS'},
      {name: 'Accessories'},
      {name: 'Hair Extensions'},
      {name: 'Wigs & Accessories'},
      {name: 'Hair Loss Products'},
      {name: 'Scalp Treatments '},
      {name: 'Styling Products'}
      ],
  },


];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['../common/categories.scss']
})
export class OfferSectionComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



 
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
   
  }
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

categories = [
  {
    id: 1,
    name: 'tech'
  },
  {
    id: 2,
    name: 'animals'
  },
  {
    id: 3,
    name: 'food'
  }
];
categoriesSelected = [
  false, true, false
];

panelOpenState = false;

myGroup: FormGroup;

  constructor(private readonly fb: FormBuilder,
   ) {
    this.myGroup = this.fb.group({
      myCategory: this.fb.array(this.categoriesSelected)
    });
  }


  

  ngOnInit(): void {}

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


}
