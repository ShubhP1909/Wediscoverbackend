import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WegrowComponent } from './wegrow.component';

const routes: Routes = [{ path: '', component: WegrowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WegrowRoutingModule { }
