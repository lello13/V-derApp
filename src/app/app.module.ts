import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TidFixPipe } from './tid-fix.pipe';
import { VaderprognosComponent } from './vaderprognos/vaderprognos.component';
import { VaderDataComponent } from './vader-data/vader-data.component';



@NgModule({
  declarations: [
    AppComponent,
    TidFixPipe,
    VaderprognosComponent,
    VaderDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
