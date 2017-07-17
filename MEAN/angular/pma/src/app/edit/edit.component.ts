import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObsService } from './../obs.service';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  subscription: Subscription

  products = [];

  editing:any = [];

  index = null;

  constructor(private _obsService: ObsService, private _route: ActivatedRoute) {
    this.subscription = _obsService.createdProducts.subscribe(
      (newProducts) => {this.products = newProducts},
      (err) => { console.log(err) },
      () => {}
    );
    this._route.params.subscribe(
      (param) => {
        for (let i = 0; i < this.products.length; i++) {
          if (param.id == this.products[i].id) {
            console.log(this.products[i]);
            this.index = i;
            this.editing = this.products[i];
          }
        }
     });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  edit() {
    this.del();
    this.products.push(this.editing);
  }

  del() {
    this.products.splice(this.index, 1);
  }

  ngOnInit() {
  }

}
