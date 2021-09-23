import { environment } from './../../../environments/environment';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  submitted = false;

  constructor(
    public router: Router, 
    public formBuilder: FormBuilder, 
    public crudService:CrudService,
    public localService:LocalService 
    ) { }
  ngOnInit() {
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
    
    this.crudService.post(environment.API.END_Points.login,{"username":"test@gmail.com","password":"Admin@123","social":false}).subscribe((res:any)=>{
      if(res.access_token){
        this.localService.set('session-token',res);
      }
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
     