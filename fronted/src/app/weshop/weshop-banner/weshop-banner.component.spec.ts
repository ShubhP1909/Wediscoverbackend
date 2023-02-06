import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeshopBannerComponent } from './weshop-banner.component';

describe('WeshopBannerComponent', () => {
  let component: WeshopBannerComponent;
  let fixture: ComponentFixture<WeshopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeshopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeshopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
