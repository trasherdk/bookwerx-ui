import {Component, /*Input,*/ Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <div>
      <h1>{{counter}}</h1>
      <button (click)="change(1)">+1</button>
      <button (click)="change(-1)">-1</button>
    </div>`
})
export class CounterComponent {
  @Output() changes = new EventEmitter();
  private counter
  constructor() {
    this.counter = 0;
  }

  change(increment) {
    this.counter += increment;
    //we use emit as next is marked as deprecated
    this.changes.emit(this.counter);
  }
}
