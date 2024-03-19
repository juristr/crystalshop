import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { utils } from '@crystalshop/shared/utils';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'crystalshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vendors';

  constructor() {
    utils();
  }
}
