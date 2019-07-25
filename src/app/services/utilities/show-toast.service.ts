import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShowToastService {
  toast: HTMLIonToastElement;

  constructor(private toastCtrl: ToastController, ) {
    this.toastCtrl.create({ animated: false }).then(t => { t.present(); t.dismiss(); });
  }

  async showNetworkStateErrorToast(data: string) {
    this.toast = await this.toastCtrl.create({
      message: data,
      position: 'bottom',
      color: 'danger'
    });
    this.toast.present();
  }

  async showNetworkStateSuccessToast(data: string, duration = 3000) {
    const toast = await this.toastCtrl.create({
      message: data,
      duration,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  async showToast(data: string) {
    const toast = await this.toastCtrl.create({
      message: data,
      position: 'bottom',
      buttons: [
        {
          text: 'Load',
          handler: () => {
            window.location.reload();
          }
        }
      ]
    });
    toast.present();
  }
}
