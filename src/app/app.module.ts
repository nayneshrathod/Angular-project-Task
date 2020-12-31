import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ConvrtComponent } from './convrt/convrt.component';
import { DisabletextboxComponent } from './disabletextbox/disabletextbox.component';
import { IfelseexmpComponent } from './ifelseexmp/ifelseexmp.component';
import { ForloopexmpComponent } from './forloopexmp/forloopexmp.component';
import { SwitchcaseexmpComponent } from './switchcaseexmp/switchcaseexmp.component';
import { FormexampleComponent } from './formexample/formexample.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ConvrtComponent,
    DisabletextboxComponent,
    IfelseexmpComponent,
    ForloopexmpComponent,
    SwitchcaseexmpComponent,
    FormexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
