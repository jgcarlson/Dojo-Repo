import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ObsService {

  constructor() { }
  map = new BehaviorSubject(null);
  getLocations(locations: any) {
    console.log('obs1')
    console.log('obs', locations)
    this.map.next(locations);
  }

}
