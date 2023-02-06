import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WegrowRoutingModule } from './wegrow-routing.module';
import { WegrowComponent } from './wegrow.component';
import { WegrowBannerComponent } from './wegrow-banner/wegrow-banner.component';
import { GrowWorksComponent } from './grow-works/grow-works.component';


@NgModule({
  declarations: [
  WegrowComponent,
  WegrowBannerComponent,
  GrowWorksComponent
  ],
  imports: [
    CommonModule,
    WegrowRoutingModule,
    NgbModule,
    SwiperModule
  ]
})
export class WegrowModule { }
