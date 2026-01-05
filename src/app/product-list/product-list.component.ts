import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  constructor(private apiService: ApiService) { }

  products: any[] = [];

  ngOnInit() {
    this.apiService.getData().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
