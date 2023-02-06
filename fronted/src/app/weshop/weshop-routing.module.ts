import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeshopComponent } from './weshop.component';

const routes: Routes = [{ path: '', component: WeshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeshopRoutingModule { }
