import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'app/modules/service/main.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  form: FormGroup = new FormGroup({

    id: new FormControl(null),

    firstName: new FormControl('', [ Validators.required ]),

    lastName: new FormControl('', [ Validators.required ]),

    email: new FormControl('', [ Validators.required ]),

    phoneNumber: new FormControl('', [ Validators.required ]),

    country: new FormControl('', [ Validators.required ]),

    city: new FormControl('', [ Validators.required ]),

    address: new FormControl('', [ Validators.required ]),

    zipCode: new FormControl('', [ Validators.required ]),

  });

  constructor(    public readonly route: ActivatedRoute,) { }

  ngOnInit(): void {

    const tId = this.route.snapshot.queryParamMap.get('id');

    // if (tId) {


    //   this.userService.get(tId, {}).subscribe((bankC) => {

    //     this.form.setValue({
    //       id: bankC.id ?? '',
    //       lastName: bankC.lastName ?? '',
    //       email: bankC.email ?? '',
    //       phoneNumber: bankC.phoneNumber ?? '',
    //       country: bankC.country ?? '',
    //       city: bankC.city ?? '',
    //       address: bankC.address ?? '',
    //       zipCode: bankC.zipCode ?? ''
    //     });

    //     this.loading = false;

    //   });

    // } else {

    //   this.loading = false;

    // }

  }

  upsertBank(): void {}

}
