package io.jgcarlson.products.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.products.models.Category;
import io.jgcarlson.products.models.Product;
import io.jgcarlson.products.repositories.CategoryRepository;
import io.jgcarlson.products.repositories.ProductRepository;

@Service
public class ProductService {
	
	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;
	
	public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}
	
	public Iterable<Product> allProducts() {
		return productRepository.findAll();
	}
	
	public void addProduct(Product product) {
		productRepository.save(product);
	}
	
	public Product getProductById(Long id) {
		return productRepository.findOne(id);
	}
	
	public void saveProduct(Product product) {
		productRepository.save(product);
	}
	
	public void addProductToCategory(Long productId, Long categoryId) {
		Product product = productRepository.findOne(productId);
		Category category = categoryRepository.findOne(categoryId);
		List<Category> categories = product.getCategories();
		categories.add(category);
		product.setCategories(categories);
		System.out.println(categories);
		System.out.println(product.getCategories());
		this.saveProduct(product);
	}

}
