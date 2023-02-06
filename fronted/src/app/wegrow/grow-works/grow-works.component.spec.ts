import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowWorksComponent } from './grow-works.component';

describe('GrowWorksComponent', () => {
  let component: GrowWorksComponent;
  let fixture: ComponentFixture<GrowWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
