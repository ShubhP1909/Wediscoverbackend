import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeintroBannerComponent } from './weintro-banner.component';

describe('WeintroBannerComponent', () => {
  let component: WeintroBannerComponent;
  let fixture: ComponentFixture<WeintroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeintroBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeintroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
