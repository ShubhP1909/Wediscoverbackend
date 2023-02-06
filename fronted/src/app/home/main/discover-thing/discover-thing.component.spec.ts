import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverThingComponent } from './discover-thing.component';

describe('DiscoverThingComponent', () => {
  let component: DiscoverThingComponent;
  let fixture: ComponentFixture<DiscoverThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverThingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
