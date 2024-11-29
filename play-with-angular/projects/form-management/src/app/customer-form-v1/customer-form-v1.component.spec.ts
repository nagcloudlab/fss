import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormV1Component } from './customer-form-v1.component';

describe('CustomerFormV1Component', () => {
  let component: CustomerFormV1Component;
  let fixture: ComponentFixture<CustomerFormV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFormV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
