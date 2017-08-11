package io.jgcarlson.products.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.products.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
