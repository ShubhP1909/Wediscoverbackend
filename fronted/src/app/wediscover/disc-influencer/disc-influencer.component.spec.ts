import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscInfluencerComponent } from './disc-influencer.component';

describe('DiscInfluencerComponent', () => {
  let component: DiscInfluencerComponent;
  let fixture: ComponentFixture<DiscInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscInfluencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
