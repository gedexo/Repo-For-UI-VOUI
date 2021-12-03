import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit commodo, mauris, lectus volutpat. Neque porttitor molestie'


size= 'M';
color= 'Light Grey';
price = '€68';

 count(idx:any){
  return  new Array(idx);
}
  constructor() { }

  ngOnInit(): void {

}

}
