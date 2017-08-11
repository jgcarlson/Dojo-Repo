package io.jgcarlson.products.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.products.models.Category;
import io.jgcarlson.products.repositories.CategoryRepository;

@Service
public class CategoryService {

	private CategoryRepository categoryRepository;
	
	public CategoryService(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}
	
	public Iterable<Category> allCategories() {
		return categoryRepository.findAll();
	}
	
	public void addCategory(Category category) {
		categoryRepository.save(category);
	}
	
	public Category getCategoryById(Long id) {
		return categoryRepository.findOne(id);
	}

}
