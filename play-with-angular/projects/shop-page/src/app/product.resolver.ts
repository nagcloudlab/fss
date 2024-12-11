import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from './product.service';

export const productResolver: ResolveFn<any[]> = (route) => {
  const productService = inject(ProductService);
  const category=route.paramMap.get('category'); // Read route parameter
  return productService.getProducts(category);
};
