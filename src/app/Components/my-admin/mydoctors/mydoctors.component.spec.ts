import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydoctorsComponent } from './mydoctors.component';

describe('MydoctorsComponent', () => {
  let component: MydoctorsComponent;
  let fixture: ComponentFixture<MydoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydoctorsComponent]
    });
    fixture = TestBed.createComponent(MydoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
