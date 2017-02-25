import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateDialogComponent } from './home/create-dialog/create-dialog.component';
import { TVComponent } from './home/tv/tv.component';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CreateDialogComponent,
    TVComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    DragulaModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateDialogComponent]
})
export class AppModule { }
