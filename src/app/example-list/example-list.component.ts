import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css']
})
export class ExampleListComponent {

  count$ = this.store.pipe(select('count'));

  constructor(private store: Store<{ count: number }>) {
  }
}