import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WediscoverhubBannerComponent } from './wediscoverhub-banner.component';

describe('WediscoverhubBannerComponent', () => {
  let component: WediscoverhubBannerComponent;
  let fixture: ComponentFixture<WediscoverhubBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WediscoverhubBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WediscoverhubBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
