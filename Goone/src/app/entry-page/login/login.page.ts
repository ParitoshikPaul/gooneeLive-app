import { environment } from './../../../environments/environment';
import { CrudService } from './../../services/crud.service';
import { BaseService } from './../../services/base.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private fb: Facebook, public formBuilder: FormBuilder, private crudService:CrudService) { }
  ngOnInit() {
    //   this.fb.login(['public_profile', 'user_friends', 'email'])
    // .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    // .catch(e => console.log('Error logging into Facebook', e));
    this.loginForm = this.formBuilder.group({
      username: new FormControl('admin@yopmail.com', Validators.compose([Validators.required, Validators.email])),
      usernamePassword: new FormControl('123456', Validators.compose([Validators.required]))
    });
  }

  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;
    console.log(this.loginForm)

    if (this.loginForm.invalid) {
      return;
    }
    
    this.crudService.post(environment.API.END_Points.login,{"username":"test@gmail.com","password":"Admin@123","social":false}).subscribe((res)=>{
      console.log(res)
    });     
    this.router.navigateByUrl('/login');
  }

  register() {
    this.router.navigateByUrl('/sign-up');
  }

  forgot() {
    // this.router.navigateByUrl('/forgot');
  }

}
