import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './../obs.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

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

  del(index) {
    this.products.splice(index, 1);
  }

  delete() {

  }

  ngOnInit() {
  }

}
