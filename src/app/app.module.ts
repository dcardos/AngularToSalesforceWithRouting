import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy } from '@angular/common';
import { SalesforceHashLocationStrategy } from './util/sf-path-location-strategy';
import { HomeComponent } from './home/home.component';
import { StaticPathPipe } from './pipes/static-path.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    StaticPathPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: SalesforceHashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
