package com.nukangAdmin.be.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.nukangAdmin.be.model.Category;
import com.nukangAdmin.be.repository.CategoryRepository;

@RestController
@RequestMapping("api/v1")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public List<Category> getAllCategory(){return categoryRepository.findAll();}

    @PostMapping("/category")
    public Category addCategory(@RequestBody Category category){return categoryRepository.save(category);}

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCity(@PathVariable String id){
        Category category = categoryRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        categoryRepository.delete(category);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Category> getMercCatId(@PathVariable String id){
        Category category = categoryRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(category);
    }

    @PostMapping("category/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Category> updateMercCat(@PathVariable String id,@RequestBody Category categoryDetails){
        Category category = categoryRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        category.setCategoryId(categoryDetails.getCategoryId());
        category.setCategoryName(categoryDetails.getCategoryName());

        Category updateMercCat = categoryRepository.save(category);
        return ResponseEntity.ok(updateMercCat);
    }
}