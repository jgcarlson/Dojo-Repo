import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ObsService } from './obs.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _obsService: ObsService){
    _obsService.createProduct(this.products);
    _obsService.createdProducts.subscribe(
      (newProducts) => {this.products = newProducts, console.log(this.products)},
      (err) => { console.log(err) },
      () => {}
    );
  }
  title = 'Product Management App';
  p = new Product();
  products = [];
  createProduct() {
    console.log('1.', this.p)
    this.products.push(this.p);
    this.p = new Product();
  }
}
