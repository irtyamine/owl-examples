import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePickerComponent } from './inline-picker.component';

describe('InlinePickerComponent', () => {
  let component: InlinePickerComponent;
  let fixture: ComponentFixture<InlinePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlinePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
