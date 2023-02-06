import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WegrowComponent } from './wegrow.component';

describe('WegrowComponent', () => {
  let component: WegrowComponent;
  let fixture: ComponentFixture<WegrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WegrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WegrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
