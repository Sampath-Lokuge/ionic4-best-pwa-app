import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NetworkStateService } from './services/utilities/network-state-service';
import { LocalStorageService } from './services/utilities/local-storage.service';
import { NewVersionService } from './services/utilities/new-version.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Quotes',
      url: '/quotes',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'log-out'
    }
  ];

  constructor(private platform: Platform,
    private networkStateService: NetworkStateService,
    private localStorageService: LocalStorageService,
    private newVersionService: NewVersionService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.networkStateService.WatchConnection();
    this.newVersionService.showNewVersion();
  }

  logout(p: any) {
    if (p.title === 'Logout') {
      this.localStorageService.clear();
    }
  }
}
