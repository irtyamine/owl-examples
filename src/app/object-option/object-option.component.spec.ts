import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOptionComponent } from './object-option.component';

describe('ObjectOptionComponent', () => {
  let component: ObjectOptionComponent;
  let fixture: ComponentFixture<ObjectOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
