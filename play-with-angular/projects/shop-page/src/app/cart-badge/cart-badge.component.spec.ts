import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBadgeComponent } from './cart-badge.component';

describe('CartBadgeComponent', () => {
  let component: CartBadgeComponent;
  let fixture: ComponentFixture<CartBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
