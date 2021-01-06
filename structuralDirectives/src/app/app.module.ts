import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfSampleComponent } from './ng-if-sample/ng-if-sample.component';
import { NgSwitchSampleComponent } from './ng-switch-sample/ng-switch-sample.component';
import { NgForSampleComponent } from './ng-for-sample/ng-for-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfSampleComponent,
    NgSwitchSampleComponent,
    NgForSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
