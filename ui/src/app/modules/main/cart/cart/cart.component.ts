import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MainService} from '../../../service/main.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity: number;

  @ViewChild('rightSidenav', {static: true}) sidenav: MatSidenav | any;



  constructor(private readonly mainService:MainService,
    private readonly router:Router) {
    this.quantity = 1;
  }
  toggleActive = false;

  ngOnInit() {
    this.mainService.setSidenav(this.sidenav);

  }

  valueChange(event: any) {

  }
  decrementValue(): void {
    if (this.quantity >1) {
      this.quantity = this.quantity - 1;
      this.valueChange(this.quantity);
    } else {
      return;
    }
  }
  incrementValue(): void {
    if (this.quantity < 5) {
      this.quantity = this.quantity + 1;
      this.valueChange(this.quantity);
    }
  }



  toggleRightSidenav():void{

this.mainService.close();


  }


  gotoUserinfo():void{
    this.router.navigate(['/userinfo']);
    this.sidenav.toggle();
  }

  navigateToHome():void{
    this.router.navigate(['/dashboard']);
  }
}
