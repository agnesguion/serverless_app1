import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <ul>
          <li><a routerLink="firstComponent">First component</a></li>
          <li><a routerLink="secondComponent">Second component</a></li>
      </ul>
  `
})
export class MenuComponent {

}
