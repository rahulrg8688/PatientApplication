import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminLoginComponent } from './user-admin-login.component';

describe('UserAdminLoginComponent', () => {
  let component: UserAdminLoginComponent;
  let fixture: ComponentFixture<UserAdminLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdminLoginComponent]
    });
    fixture = TestBed.createComponent(UserAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
