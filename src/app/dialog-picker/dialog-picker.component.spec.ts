import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPickerComponent } from './dialog-picker.component';

describe('DialogPickerComponent', () => {
  let component: DialogPickerComponent;
  let fixture: ComponentFixture<DialogPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
