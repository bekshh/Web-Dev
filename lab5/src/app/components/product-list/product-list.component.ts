import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { output } from '@angular/core';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  delete = output<number>();

  onDelete(productId: number) {
    this.delete.emit(productId);
  }

}
