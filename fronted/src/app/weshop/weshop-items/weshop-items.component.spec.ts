import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeshopItemsComponent } from './weshop-items.component';

describe('WeshopItemsComponent', () => {
  let component: WeshopItemsComponent;
  let fixture: ComponentFixture<WeshopItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeshopItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeshopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
