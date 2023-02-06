import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grow-works',
  templateUrl: './grow-works.component.html',
  styleUrls: ['./grow-works.component.css']
})
export class GrowWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  growcard(n: number): Array<number> {
    return Array(n);
  }

}
