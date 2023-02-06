import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WediscoverComponent } from './wediscover.component';

describe('WediscoverComponent', () => {
  let component: WediscoverComponent;
  let fixture: ComponentFixture<WediscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WediscoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WediscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
