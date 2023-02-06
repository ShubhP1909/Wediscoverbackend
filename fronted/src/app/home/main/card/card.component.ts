import { Component, OnInit,ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
