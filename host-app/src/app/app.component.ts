import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'host-app';
  remoteComponent: any;

  constructor() {
    loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'microfrontendApp',
      exposedModule: './FeatureComponent',
    }).then((m) => {
      this.remoteComponent = m.FeatureComponent;
    });
  }
}
