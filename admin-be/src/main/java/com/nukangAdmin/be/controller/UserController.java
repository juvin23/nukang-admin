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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.nukangAdmin.be.model.User;
import com.nukangAdmin.be.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //get all user data
    @GetMapping("/users")
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    // @PostMapping("/users")
    // public User addUser(@RequestBody User user){
    //     return userRepository.save(user);
    // }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserID(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(user);
    }

    // @PostMapping("users/{id}")
    // @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    // public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User userDetails){
    //     User user = userRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

    //     user.setName(userDetails.getName());
    //     user.setEmail(userDetails.getEmail());
    //     user.setAddress(userDetails.getAddress());
    //     user.setPhone(userDetails.getPhone());

    //     User updateUser = userRepository.save(user);
    //     return ResponseEntity.ok(updateUser);
    // }

    @DeleteMapping("users/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteUser(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        userRepository.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
