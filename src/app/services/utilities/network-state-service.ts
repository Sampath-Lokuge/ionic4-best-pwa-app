import { Injectable } from '@angular/core';
import { ShowToastService } from './show-toast.service';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

const { Network } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NetworkStateService {

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  constructor(private showToastService: ShowToastService) { }

  async WatchConnection() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      if (!this.networkStatus.connected) {
        this.showToastService.showNetworkStateErrorToast('Your internet seems to be down! Please check your network settings!');
      } else {
        setTimeout(() => {
          this.showToastService.toast.dismiss();
          if (this.networkStatus.connected) {
            this.showToastService.showNetworkStateSuccessToast('Internet connection available!');
          }
        }, 3000);
      }
    });

    this.networkStatus = await Network.getStatus();
  }

}
