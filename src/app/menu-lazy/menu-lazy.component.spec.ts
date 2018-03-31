import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLazyComponent } from './menu-lazy.component';

describe('MenuLazyComponent', () => {
  let component: MenuLazyComponent;
  let fixture: ComponentFixture<MenuLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
