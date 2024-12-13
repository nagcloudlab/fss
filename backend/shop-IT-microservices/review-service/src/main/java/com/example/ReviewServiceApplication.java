package com.example;

import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;


class Review {
	private String author;
	private int rating;
	private String body;
	
	public Review() {
	}
	
	public Review(String author, int rating, String body) {
		this.author = author;
		this.rating = rating;
		this.body = body;
	}
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public int getRating() {
		return rating;
	}
	
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public String getBody() {
		return body;
	}
	
	public void setBody(String body) {
		this.body = body;
	}
}

// create a repository interface for review

@Repository
class ReviewRepository {
	private List<Review> reviews;
	
	public ReviewRepository() {
		reviews = new ArrayList<>();
		reviews.add(new Review("who1", 5, "sample review1"));
		reviews.add(new Review("who2", 4, "sample review2"));
		reviews.add(new Review("who3", 3, "sample review3"));
	}
	
	public List<Review> findAll() {
		return reviews;
	}
	
	public Review save(Review review) {
		reviews.add(review);
		return review;
	}
}
 
// create a controller class for review

@RestController
class ReviewController {
	private ReviewRepository reviewRepository;
	
	public ReviewController(ReviewRepository reviewRepository) {
		this.reviewRepository = reviewRepository;
	}
	
	@GetMapping("/reviews/{productId}")
	public ResponseEntity<?> findAll(@PathVariable int productId) {
		if(productId==1){
			List<Review> reviews = reviewRepository.findAll();
			return ResponseEntity.ok(reviews);
		}
		else{
			return ResponseEntity.ok(List.of());
		}
	}
	
	@PostMapping
	public Review save(@RequestBody Review review) {
		return reviewRepository.save(review);
	}
}

@SpringBootApplication
public class ReviewServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReviewServiceApplication.class, args);
	}

}
