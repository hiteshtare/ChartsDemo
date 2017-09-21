import { Component } from '@angular/core';

import { MenuModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Charts',
      items: [
        { label: 'Stacked Bar', routerLink: ['/stackedbarchart'] },
        { label: 'Dough Nut', routerLink: ['/doughnutchart'] },
        { label: 'Line', routerLink: ['/linechart'] }
      ]
    }];
  }
}
