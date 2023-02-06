import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WemeetComponent } from './wemeet.component';

describe('WemeetComponent', () => {
  let component: WemeetComponent;
  let fixture: ComponentFixture<WemeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WemeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WemeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
