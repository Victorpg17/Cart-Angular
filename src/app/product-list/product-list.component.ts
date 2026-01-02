import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ProductCardComponent } from '../product-card/product-card.component'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  constructor(private apiService: ApiService) { }

  products: any[] = [];

  selectedProduct: any = null;
  ngOnInit() {
    this.apiService.getData().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
