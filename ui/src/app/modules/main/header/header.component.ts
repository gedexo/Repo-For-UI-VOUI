import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface currencies {
  value: string;
  name: string;

}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  user='murugan';
  no_of_items = 5;
  


  form:FormGroup = new FormGroup({
       currency: new FormControl('Euro'),
  });



  ngOnInit(): void {

  }
  selectCar():void{
    console.log('hi');
    
  }
}
