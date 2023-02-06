import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTabComponent } from './discover-tab.component';

describe('DiscoverTabComponent', () => {
  let component: DiscoverTabComponent;
  let fixture: ComponentFixture<DiscoverTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
