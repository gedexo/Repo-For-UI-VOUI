import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
export interface userDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface addressDetials {
  country: string;
  city: string;
  address: string;
  zipCode: string;
}
const USER_DATA: userDetails[] = [
  {
    firstName: 'Murugan',
    lastName: 'C',
    email: 'muruganck4you@gmail.com',
    phoneNumber: '7339234152',
  },
];
const ADDRESS_DATA: addressDetials[] = [
  {
    country: 'Murugan',
    city: 'madurai',
    address: 'usilampati, pasukaranpatti',
    zipCode: '625532',
  },
];
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'email', 'phoneNumber' ];

  displayedAddress: string[] = [ 'country', 'city', 'address', 'zipCode' ];

 dataSourceUser = USER_DATA;
 dataSourceAddress = ADDRESS_DATA;


 @Input() columnHeaders: Record<string, string>;
 @Input() columnAddress: Record<string, string>;
  constructor( public readonly router: Router,) {
    this.columnHeaders = {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'e-mail Id',
      phoneNumber: 'Phone number',
    }

    this.columnAddress = {
      country: 'Country Name',
      city: 'City name',
      address: 'Address',
      zipCode: 'ZIP Code',
    }
   }

   @HostListener('window:scroll', ['$event'])
   onScroll(event:any) {
     AOS.init();

   }

  ngOnInit(): void {

  }



  findColumnValue = (element:unknown, column:string,
    parsingFn?:(elm:unknown, clm:string)=>string):string => {

    if (parsingFn) {

      const pVal = parsingFn(element, column);
      if (pVal) {

        return pVal;

      }

    }
    return <string> column.split('.').reduce((acc:any, cur) => acc[cur] ?? '', element);

  };

  navigateToInfo():void{
    this.router.navigate(['/userinfo']);
  }

}
