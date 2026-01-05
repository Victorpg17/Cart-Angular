import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private dialog: MatDialog) { }
  
  openCart() {
    this.dialog.open(CartComponent, {
      width: 'min(100vw, 40rem)'
    });
  }
}
