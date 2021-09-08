import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passcode-verification',
  templateUrl: './passcode-verification.page.html',
  styleUrls: ['./passcode-verification.page.scss'],
})
export class PasscodeVerificationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  signupsubmit(){
    this.router.navigateByUrl("password")
  }
}
