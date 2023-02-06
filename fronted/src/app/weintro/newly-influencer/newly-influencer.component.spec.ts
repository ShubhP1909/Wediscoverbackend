import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlyInfluencerComponent } from './newly-influencer.component';

describe('NewlyInfluencerComponent', () => {
  let component: NewlyInfluencerComponent;
  let fixture: ComponentFixture<NewlyInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlyInfluencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlyInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
