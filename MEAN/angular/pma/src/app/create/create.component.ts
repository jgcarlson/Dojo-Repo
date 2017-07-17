import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './../obs.service';
import { Product } from './../product';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {

  subscription: Subscription

  products = [];

  constructor(private _obsService: ObsService) {
    this.subscription = _obsService.createdProducts.subscribe(
      (newProducts) => {this.products = newProducts, console.log(this.products)},
      (err) => { console.log(err) },
      () => {}
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // retrieveCurrentProductData(){
  //   this.products = this._obsService.subject.getValue();
  // }

  p = new Product();

  createProduct() {
    this.p.id = Date.now();
    this.products.push(this.p);
    this.p = new Product();
  }

}
