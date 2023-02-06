import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerMeetingComponent } from './influencer-meeting.component';

describe('InfluencerMeetingComponent', () => {
  let component: InfluencerMeetingComponent;
  let fixture: ComponentFixture<InfluencerMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
