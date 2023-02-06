import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WemeetComponent } from './wemeet.component';

const routes: Routes = [{ path: '', component: WemeetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WemeetRoutingModule { }
