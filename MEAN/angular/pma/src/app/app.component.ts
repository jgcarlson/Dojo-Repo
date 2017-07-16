import { Component } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management App';
  p = new Product();
  products = []
  createProduct() {
    this.products.push(this.p);
    this.p = new Product();
  }
}
