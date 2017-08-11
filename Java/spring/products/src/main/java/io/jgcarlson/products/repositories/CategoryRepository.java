package io.jgcarlson.products.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.products.models.Category;

public interface CategoryRepository extends CrudRepository<Category, Long> {

}
