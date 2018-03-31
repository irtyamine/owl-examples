import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSpaceComponent } from './no-space.component';

describe('NoSpaceComponent', () => {
  let component: NoSpaceComponent;
  let fixture: ComponentFixture<NoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
