import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number',
  templateUrl: './number.page.html',
  styleUrls: ['./number.page.scss'],
})
export class NumberPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  passcode(){
    this.router.navigateByUrl("/passcode-verification")
  }

}
