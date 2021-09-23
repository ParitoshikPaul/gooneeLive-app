import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public loginForm: FormGroup;
  submitted = false;


  constructor(
      public router: Router, 
      public formBuilder: FormBuilder, 
      public crudService:CrudService,
      public localService:LocalService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      first_name: new FormControl('', Validators.compose([Validators.required])),
      last_name: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  next(){
    this.router.navigateByUrl('number');
  }

  register(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.localService.set('sign-up',this.loginForm.value);
    this.router.navigateByUrl('number');
  }

  get f() { return this.loginForm.controls; }


}
