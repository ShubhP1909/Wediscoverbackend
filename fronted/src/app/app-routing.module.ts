import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WediscoverComponent } from './wediscover/wediscover.component';
import { LatestproductComponent } from './weshop/latestproduct/latestproduct.component';
import { ViewproductComponent } from './weshop/viewproduct/viewproduct.component';
import { WeshopComponent } from './weshop/weshop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'WeDiscover', component: WediscoverComponent },
  { path: 'WeMeet', loadChildren: () => import('./wemeet/wemeet.module').then(m => m.WemeetModule), canActivate: [AuthGuard] },
  { path: 'WeIntro', loadChildren: () => import('./weintro/weintro.module').then(m => m.WeintroModule), canActivate: [AuthGuard] },
  { path: 'WeGrow', loadChildren: () => import('./wegrow/wegrow.module').then(m => m.WegrowModule), canActivate: [AuthGuard] },
  {
    path: 'WeShop',
    // loadChildren: () => import('./weshop/weshop.module').then(m => m.WeshopModule),
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: WeshopComponent
      },
      {
        path: ':id', component: ViewproductComponent
      },
      {
        path: 'phone-store/:id', component: LatestproductComponent
      }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
