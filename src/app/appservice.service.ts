import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  count: BehaviorSubject<number>;
  counter = 1;
  constructor() {

    this.count  = new BehaviorSubject(this.counter);
  }

  nextCount() {
    this.count.next(++ this.counter);
  }
}
