import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeshopComponent } from './weshop.component';

describe('WeshopComponent', () => {
  let component: WeshopComponent;
  let fixture: ComponentFixture<WeshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
