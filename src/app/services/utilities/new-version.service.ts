import { Injectable } from '@angular/core';
import { ShowToastService } from './show-toast.service';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NewVersionService {

  constructor(private showToastService: ShowToastService,
    private swUpdate: SwUpdate, ) { }

  showNewVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.showToastService.showToast('New version available. Load New Version?');
      });
    }
  }
}
