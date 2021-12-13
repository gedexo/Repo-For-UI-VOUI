import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    loading = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
    this.loading = false
  }, 5000)
  }


}
