import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConvrtComponent } from './convrt/convrt.component';
import { DisabletextboxComponent } from './disabletextbox/disabletextbox.component';
import { ForloopexmpComponent } from './forloopexmp/forloopexmp.component';
import { FormexampleComponent } from './formexample/formexample.component';
import { IfelseexmpComponent } from './ifelseexmp/ifelseexmp.component';
import { SwitchcaseexmpComponent } from './switchcaseexmp/switchcaseexmp.component';

const routes: Routes = [
  { path: '', component:ConvrtComponent},
  { path: 'about', component:AboutComponent},
  { path: 'ifelse', component:IfelseexmpComponent},  
  { path: 'forloop', component:ForloopexmpComponent},  
  { path: 'switchex', component:SwitchcaseexmpComponent},  
  { path: 'formexm', component:FormexampleComponent},  
  { path: 'disabletextbox', component:DisabletextboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
