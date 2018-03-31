import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyinAnimationComponent } from './flyin-animation.component';

describe('FlyinAnimationComponent', () => {
  let component: FlyinAnimationComponent;
  let fixture: ComponentFixture<FlyinAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyinAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyinAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
