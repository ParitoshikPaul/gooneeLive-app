import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public setter: any;
  public getter: any;
  public alert: any;

  constructor(public alertController: AlertController, public loadingController: LoadingController) { }

  set(key: any, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: any) {
    return JSON.parse(localStorage.getItem(key));
  }

  async presentAlert(body:any, subtitle:any=null) {
    this.alert = await this.alertController.create({
      header: 'Alert',
      message: body,
      buttons: ['OK']
    });

    await this.alert.present();

    const { role } = await this.alert.onDidDismiss();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}
