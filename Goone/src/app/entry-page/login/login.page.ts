import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private fb: Facebook) { }
  ngOnInit() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }

  login(){
    this.router.navigateByUrl('/login');
  }

  register(){
    this.router.navigateByUrl('/sign-up');
  }

  forgot(){
    // this.router.navigateByUrl('/forgot');
  }

}
