package io.jgcarlson.products.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import io.jgcarlson.products.models.Category;
import io.jgcarlson.products.models.Product;
import io.jgcarlson.products.services.CategoryService;
import io.jgcarlson.products.services.ProductService;

@Controller
public class ProductController {
	
	private ProductService productService;
	private CategoryService categoryService;
	
	public ProductController(ProductService productService, CategoryService categoryService) {
		this.productService = productService;
		this.categoryService = categoryService;
	}
	
	@RequestMapping("/products/new")
	public String addProductView(@ModelAttribute("product") Product product) {
		return "addProductView.jsp";
	}
	
	@PostMapping("/products/new")
	public String addProduct(@Valid @ModelAttribute("product") Product product, BindingResult result) {
		if (result.hasErrors()) {
			return "addProductView.jsp";
		} else {
			productService.addProduct(product);
			return "redirect:/";
		}
	}
	
	@RequestMapping("/products/all")
	public String allproducts(Model model) {
		Iterable<Product> products = productService.allProducts();
		model.addAttribute("products", products);
		return "allProductView.jsp";
	}
	
	@RequestMapping("/products/{id}")
	public String productView(@PathVariable("id") Long id, Model model) {
		Iterable<Category> categories = categoryService.allCategories();
		model.addAttribute("categories", categories);
		Product product = productService.getProductById(id);
		model.addAttribute("product", product);
		return "productView.jsp";
	}
	
	@PostMapping("/products/{id}")
	public String addProductToCategory(@PathVariable("id") Long productId, @RequestParam("category") Long categoryId) {
		productService.addProductToCategory(productId, categoryId);
		return "redirect:/";
	}
	
}
