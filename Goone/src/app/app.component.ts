import { Component } from '@angular/core';
import * as $ from "jquery"
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private device: Device) {
    console.log('Device UUID is: ' + this.device.uuid);
  }
}
