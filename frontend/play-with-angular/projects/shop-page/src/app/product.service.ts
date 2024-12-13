import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) {}

  private products = [];

  getProducts(category: string | null): Observable<any> {
    if (category === 'electronics') {
      return this.httpClient.get(`${this.apiUrl}`, {
        headers: {
          foo: 'bar',
        },
      }); // Async Http Request
    } else {
      return of([]).pipe(delay(0));
    }
  }
}
