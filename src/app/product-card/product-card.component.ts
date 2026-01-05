import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { MatDialog } from '@angular/material/dialog';

import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartService } from '../services/cart-service.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private dialog: MatDialog, private cartService: CartService) { }

  openModal() {
    this.dialog.open(ProductModalComponent, {
      width: 'clamp(18rem, 60%, 90rem)',
      height: 'min(65%, 50rem)',
      panelClass: 'custom-modal',
      data: { product: this.product }
    });
  }

  addToCart(event: MouseEvent) {
    event.stopPropagation();
    this.cartService.addItemToCart(this.product);
  }
}