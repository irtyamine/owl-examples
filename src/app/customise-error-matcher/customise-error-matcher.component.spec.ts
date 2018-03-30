import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseErrorMatcherComponent } from './customise-error-matcher.component';

describe('CustomiseErrorMatcherComponent', () => {
  let component: CustomiseErrorMatcherComponent;
  let fixture: ComponentFixture<CustomiseErrorMatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseErrorMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseErrorMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
