import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WemeetBannerComponent } from './wemeet-banner.component';

describe('WemeetBannerComponent', () => {
  let component: WemeetBannerComponent;
  let fixture: ComponentFixture<WemeetBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WemeetBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WemeetBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
