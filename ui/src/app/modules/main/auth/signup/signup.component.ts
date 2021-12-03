import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../common/auth.scss']
})
export class SignupComponent implements OnInit {

  error= '';




  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    cpassword:new FormControl('', [ Validators.required ]),


  });


  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit():void {
    console.log('login page');
  }


  submitContact():void {


    if (this.contactForm.valid === true) {
      console.log(this.contactForm.value);


      if (!(/^(?<name>[a-zA-Z0-9_\-.]+)@(?<domain>[a-zA-Z0-9_\-.]+)\.(?<extn>[a-zA-Z]{2,5})$/ugm).test(this.contactForm.value.email)) {

        this.error = 'Please provide a valid email.';
        return;


      }
      if (this.contactForm.value.password !== this.contactForm.value.cpassword) {

        this.error = '* Password and confirm password should be same.';
        return;


      }
    else{
      console.log("form can proceed");
      this.error ="";
    }

    }

  }

}
