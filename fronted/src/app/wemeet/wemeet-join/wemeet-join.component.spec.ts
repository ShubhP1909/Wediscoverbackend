import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WemeetJoinComponent } from './wemeet-join.component';

describe('WemeetJoinComponent', () => {
  let component: WemeetJoinComponent;
  let fixture: ComponentFixture<WemeetJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WemeetJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WemeetJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
