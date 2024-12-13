import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private httpClient: HttpClient) {}

  getReviews(productId: number) {
    return this.httpClient.get(`http://localhost:8080/reviews/${productId}`);
  }
}
