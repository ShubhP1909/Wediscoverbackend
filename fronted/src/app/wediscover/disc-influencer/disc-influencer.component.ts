import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Grid } from "swiper";

// install Swiper modules
SwiperCore.use([Grid]);

@Component({
  selector: 'app-disc-influencer',
  templateUrl: './disc-influencer.component.html',
  styleUrls: ['./disc-influencer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DiscInfluencerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
