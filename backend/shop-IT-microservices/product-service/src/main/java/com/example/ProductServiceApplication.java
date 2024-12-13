package com.example;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
class Product {
	@Id
	private int id;
	private String name;
	private double price;
	private double discountPercentage;
	private String currencyCode;
	@Temporal(TemporalType.TIMESTAMP)
	private String makeDate;
	private String description;
	private String image;
	private boolean isAvailable;
}

interface ProductRepository extends JpaRepository<Product, Integer> {
}

@RestController
class ProductRestController {
	
	private final ProductRepository repository;

	ProductRestController(ProductRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts(
		@RequestHeader(name = "foo", required = false) String fooHeader
	) {
		System.out.println("fooHeader: " + fooHeader);
		return ResponseEntity.ok(repository.findAll());
	}

}

@SpringBootApplication
public class ProductServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

}
