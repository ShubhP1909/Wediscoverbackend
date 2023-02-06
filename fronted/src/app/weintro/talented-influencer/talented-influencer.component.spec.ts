import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentedInfluencerComponent } from './talented-influencer.component';

describe('TalentedInfluencerComponent', () => {
  let component: TalentedInfluencerComponent;
  let fixture: ComponentFixture<TalentedInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentedInfluencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentedInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
