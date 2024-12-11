import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormV2Component } from './customer-form-v2.component';

describe('CustomerFormV2Component', () => {
  let component: CustomerFormV2Component;
  let fixture: ComponentFixture<CustomerFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFormV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
