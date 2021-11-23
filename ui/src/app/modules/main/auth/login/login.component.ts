import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../common/auth.scss']
})
export class LoginComponent implements OnInit {

  error= '';

  loading = false;


  contactForm: FormGroup = new FormGroup({

    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  

  });

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit():void {}

  
  submitContact():void {
   

    if (this.contactForm.valid === true) {
      console.log(this.contactForm.value);
      
    
    if (!(/^(?<name>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<extn>[a-zA-Z]{2,5})$/ugm).test(this.contactForm.value.Email)) {
   
     this.error =" * please enter valid email address";
    }
    else{
      console.log('murugan');
      this.error ="";
    }
    
    }
    else{
      this.error =" * please enter your email address";

    }
  }

}
