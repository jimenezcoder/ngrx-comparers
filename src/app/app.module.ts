import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleListComponent } from './example-list/example-list.component';
 
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/example.reducer';
import { ExampleToolbarComponent } from './example-toolbar/example-toolbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
 ],
  declarations: [
    AppComponent,
    HelloComponent,
    ExampleListComponent,
    ExampleToolbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
