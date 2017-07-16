import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ObsService {

  createdProducts = new BehaviorSubject(null);
  createProduct(products: Array<any>) {
    this.createdProducts.next(products)
  }

  constructor() { }

}
