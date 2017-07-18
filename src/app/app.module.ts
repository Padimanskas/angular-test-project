import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { QueryFormComponent } from './query-form/query-form.component';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryItemComponent } from './query-item/query-item.component';



@NgModule({
  declarations: [
    AppComponent,
    QueryFormComponent,
    QueryListComponent,
    QueryItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



