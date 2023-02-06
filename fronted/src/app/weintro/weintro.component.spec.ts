import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeintroComponent } from './weintro.component';

describe('WeintroComponent', () => {
  let component: WeintroComponent;
  let fixture: ComponentFixture<WeintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeintroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
