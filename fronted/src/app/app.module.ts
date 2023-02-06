import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { WediscoverhubBannerComponent } from './home/header/wediscoverhub-banner/wediscoverhub-banner.component';
import { HomeComponent } from './home/home.component';
import { DiscoverTabComponent } from './home/main/discover-tab/discover-tab.component';
import { DiscoverThingComponent } from './home/main/discover-thing/discover-thing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './home/footer/footer.component';
import { SearchComponent } from './home/main/search/search.component';
import { CardComponent } from './home/main/card/card.component';
import { SwiperModule } from "swiper/angular";
import { WediscoverComponent } from './wediscover/wediscover.component';
import { DiscoverBannerComponent } from './wediscover/discover-banner/discover-banner.component';
import { NavbarComponent } from './home/header/navbar/navbar.component';
import { OurInfluencersComponent } from './wediscover/our-influencers/our-influencers.component';
import { DiscInfluencerComponent } from './wediscover/disc-influencer/disc-influencer.component';
import { WemeetComponent } from './wemeet/wemeet.component';
import { WemeetBannerComponent } from './wemeet/wemeet-banner/wemeet-banner.component';
import { WemeetJoinComponent } from './wemeet/wemeet-join/wemeet-join.component';
import { InfluencerMeetingComponent } from './wemeet/influencer-meeting/influencer-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthService } from './Auth/auth.service';
import { AuthGuard } from './Auth/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeshopBannerComponent } from './weshop/weshop-banner/weshop-banner.component';
import { WeshopComponent } from './weshop/weshop.component';
import { WeshopItemsComponent } from './weshop/weshop-items/weshop-items.component';
import { ViewproductComponent } from './weshop/viewproduct/viewproduct.component';
import { LatestproductComponent } from './weshop/latestproduct/latestproduct.component';
import { TokenInterceptorService } from './Auth/token-interceptor.service';
import { ProductsService } from './weshop/weshop-items/products.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    WediscoverhubBannerComponent,
    DiscoverThingComponent,
    DiscoverTabComponent,
    CardComponent,
    WemeetComponent,
    WemeetBannerComponent,
    WemeetJoinComponent,
    InfluencerMeetingComponent,
    SearchComponent,
    FooterComponent,
    WediscoverComponent,
    DiscoverBannerComponent,
    DiscInfluencerComponent,
    OurInfluencersComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    WeshopBannerComponent,
    WeshopComponent,
    WeshopItemsComponent,
    ViewproductComponent,
    LatestproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, ProductsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
