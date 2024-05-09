import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSpecialityComponent } from './doctors-speciality.component';

describe('DoctorsSpecialityComponent', () => {
  let component: DoctorsSpecialityComponent;
  let fixture: ComponentFixture<DoctorsSpecialityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsSpecialityComponent]
    });
    fixture = TestBed.createComponent(DoctorsSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
