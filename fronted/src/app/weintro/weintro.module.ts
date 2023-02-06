import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeintroRoutingModule } from './weintro-routing.module';
import { WeintroBannerComponent } from './weintro-banner/weintro-banner.component';
import { TalentedInfluencerComponent } from './talented-influencer/talented-influencer.component';
import { WeintroComponent } from './weintro.component';
import { NewlyInfluencerComponent } from './newly-influencer/newly-influencer.component';


@NgModule({
  declarations: [
    WeintroComponent,
    WeintroBannerComponent,
    TalentedInfluencerComponent,
    NewlyInfluencerComponent
  ],
  imports: [
    CommonModule,
    WeintroRoutingModule,
    NgbModule,
    SwiperModule
  ]
})
export class WeintroModule { }
