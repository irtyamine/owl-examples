import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNotifierComponent } from './custom-notifier.component';

describe('CustomNotifierComponent', () => {
  let component: CustomNotifierComponent;
  let fixture: ComponentFixture<CustomNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
