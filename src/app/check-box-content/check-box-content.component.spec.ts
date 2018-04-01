import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxContentComponent } from './check-box-content.component';

describe('CheckBoxContentComponent', () => {
  let component: CheckBoxContentComponent;
  let fixture: ComponentFixture<CheckBoxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
