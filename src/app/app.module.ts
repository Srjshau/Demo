import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhyComponent } from './why.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
