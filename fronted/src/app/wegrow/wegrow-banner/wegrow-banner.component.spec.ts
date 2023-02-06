import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WegrowBannerComponent } from './wegrow-banner.component';

describe('WegrowBannerComponent', () => {
  let component: WegrowBannerComponent;
  let fixture: ComponentFixture<WegrowBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WegrowBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WegrowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
