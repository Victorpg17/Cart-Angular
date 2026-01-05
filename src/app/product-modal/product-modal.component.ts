import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-global-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})

export class ProductModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) { }
}
