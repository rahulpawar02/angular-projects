import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayComponentComponent } from './overlay-component/overlay-component.component';
import { ListOfProductComponent } from './list-of-product/list-of-product.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponentComponent,
    ListOfProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
