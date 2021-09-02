import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;
  disablePrevBtn = true;
  disableNextBtn = false;

  slideOpts = {
    initialSlide: 0,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  swipeNext(){
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();
    Promise.all([prom1, prom2]).then((data) => {
      console.log(data)
      if(data[1]){
        this.router.navigateByUrl('/welcome');
      }else{
        this.slides.slideNext();
      }
    });
  }


  SkipToWelcome(){
    this.router.navigateByUrl('/welcome');
  }
}
