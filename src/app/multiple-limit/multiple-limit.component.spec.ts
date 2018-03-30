import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleLimitComponent } from './multiple-limit.component';

describe('MultipleLimitComponent', () => {
  let component: MultipleLimitComponent;
  let fixture: ComponentFixture<MultipleLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
