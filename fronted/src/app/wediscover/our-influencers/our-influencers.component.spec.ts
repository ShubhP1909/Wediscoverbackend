import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInfluencersComponent } from './our-influencers.component';

describe('OurInfluencersComponent', () => {
  let component: OurInfluencersComponent;
  let fixture: ComponentFixture<OurInfluencersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurInfluencersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurInfluencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
