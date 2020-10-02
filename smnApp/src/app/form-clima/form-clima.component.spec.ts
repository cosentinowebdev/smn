import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClimaComponent } from './form-clima.component';

describe('FormClimaComponent', () => {
  let component: FormClimaComponent;
  let fixture: ComponentFixture<FormClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
