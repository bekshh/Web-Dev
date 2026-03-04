import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;
  title = 'online-store';
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
}
selectCategory(categoryId: number) {
  this.selectedCategoryId = categoryId;
  this.products = this.productService.getProductsByCategory(categoryId);
  
}
handleDelete(productId: number) {
  this.products = this.products.filter(p => p.id !== productId);
}
}
