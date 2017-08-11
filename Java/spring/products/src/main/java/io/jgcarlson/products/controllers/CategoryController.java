package io.jgcarlson.products.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.products.models.Category;
import io.jgcarlson.products.models.Product;
import io.jgcarlson.products.services.CategoryService;
import io.jgcarlson.products.services.ProductService;

@Controller
public class CategoryController {
	
	private CategoryService categoryService;
	private ProductService productService;
	
	public CategoryController(CategoryService categoryService, ProductService productService) {
		this.categoryService = categoryService;
		this.productService = productService;
	}
	
	@RequestMapping("/categories/new")
	public String newCategoriesView(@ModelAttribute("category") Category category) {
		return "addCategoryView.jsp";
	}
	
	@PostMapping("/categories/new")
	public String newCategory(@Valid @ModelAttribute("category") Category category, BindingResult result) {
		if (result.hasErrors()) {
			return "addCategoryView.jsp";
		} else {
			categoryService.addCategory(category);
			return "redirect:/";
		}
	}
	
	@RequestMapping("/categories/all")
	public String allCategories(Model model) {
		Iterable<Category> categories = categoryService.allCategories();
		model.addAttribute("categories", categories);
		return "allCategoryView.jsp";
	}
	
	@RequestMapping("/categories/{id}")
	public String allCategories(@PathVariable("id") Long id, Model model) {
		Iterable<Product> products = productService.allProducts();
		model.addAttribute("products", products);
		Category category = categoryService.getCategoryById(id);
		model.addAttribute("category", category);
		return "categoryView.jsp";
	}
}
