import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.page.html',
  styleUrls: ['./entry-page.page.scss'],
})
export class EntryPagePage implements OnInit {

  constructor(private device: Device) { }

  ngOnInit() {
    console.log('Device UUID is: ' + this.device.uuid);
  }

}
