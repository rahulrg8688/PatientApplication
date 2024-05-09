import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHeaderComponent } from './nav-bar-header.component';

describe('NavBarHeaderComponent', () => {
  let component: NavBarHeaderComponent;
  let fixture: ComponentFixture<NavBarHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarHeaderComponent]
    });
    fixture = TestBed.createComponent(NavBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
