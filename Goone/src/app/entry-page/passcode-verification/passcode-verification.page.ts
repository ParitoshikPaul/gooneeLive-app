import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { LocalService } from 'src/app/services/local.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-passcode-verification',
  templateUrl: './passcode-verification.page.html',
  styleUrls: ['./passcode-verification.page.scss'],
})
export class PasscodeVerificationPage implements OnInit {

  public maskingData: any;
  public loginForm: FormGroup;
  public masking: any;
  submitted = false;
  passcodeActive = false;

  constructor(
    private router: Router,
    public localService: LocalService,
    public formBuilder: FormBuilder,
    public crudService: CrudService,
  ) { }

  ngOnInit() {
    this.maskingData = this.localService.get('sign-up');
    this.masking = (this.maskingData.phone_no).slice(-14, 8);

    this.loginForm = this.formBuilder.group({
      one: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      two: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      three: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      four: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
    });
    // this.sendOTP();
  }
  signupsubmit() {
    if (this.loginForm.status != "VALID") {
      this.passcodeActive = true;
    };

    var otpVal = this.loginForm.value.one +""+ this.loginForm.value.two +""+ this.loginForm.value.three +""+ this.loginForm.value.four
    console.log(otpVal);
    // return
    this.crudService.post(environment.API.END_Points.OTPValidation, { "phoneNumber": this.maskingData.phone_no, "verify": false, "otp":otpVal }).subscribe((res: any) => {
      console.log(res)
      if (res.status == "success") {
        this.localService.presentAlert(res.message);
      }
    });

    // this.router.navigateByUrl("password")
  }

  sendOTP() {
    this.crudService.post(environment.API.END_Points.SendOTP, { "phoneNumber": this.maskingData.phone_no, "verify": false }).subscribe((res: any) => {
      console.log(res)
      if (res.status == "success") {
        this.localService.presentAlert(res.message);
      }
    });
  }

  get f() { return this.loginForm.controls; }


}
