import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeintroComponent } from './weintro.component';

const routes: Routes = [{ path: '', component: WeintroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeintroRoutingModule { }
