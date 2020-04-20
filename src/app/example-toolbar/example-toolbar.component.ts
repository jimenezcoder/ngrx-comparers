import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/example.actions';
 
@Component({
  selector: 'app-example-toolbar',
  templateUrl: './example-toolbar.component.html',
  styleUrls: ['./example-toolbar.component.css'],
})
export class ExampleToolbarComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {}
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}