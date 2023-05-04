package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.Admin;
import com.nukangAdmin.be.model.User;
import com.nukangAdmin.be.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class AdminController {
    @Autowired
    private AdminRepository repository;

    @PostMapping("/login")
    public ResponseEntity<Admin> updateUser(@RequestBody Admin adminDetails){
        Admin admin = repository.findById(adminDetails.getUserId())
                .orElseThrow(() -> new ResourceAccessException("Id not found"));
        if(admin.getPassword().equals(adminDetails.getPassword())){
            return ResponseEntity.ok(admin);
        }
        return  (ResponseEntity<Admin>) ResponseEntity.internalServerError();
    }

}
