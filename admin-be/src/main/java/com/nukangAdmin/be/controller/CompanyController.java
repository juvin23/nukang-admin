package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.City;
import com.nukangAdmin.be.model.Company;
import com.nukangAdmin.be.model.User;
import com.nukangAdmin.be.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class CompanyController {
    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/company")
    public List<Company> getAllUser(){
        return companyRepository.findAll();
    }

    @DeleteMapping("company/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        Company company = companyRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        companyRepository.delete(company);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/company")
    public Company addCompany(@RequestBody Company company){
        return companyRepository.save(company);
    }

    @GetMapping("/company/{id}")
    public ResponseEntity<Company> getCompanyID(@PathVariable Long id){
        Company company = companyRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(company);
    }

    @PostMapping("company/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company companyDetails){
        Company company = companyRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        company.setName(companyDetails.getName());
        company.setEmail(companyDetails.getEmail());
        company.setAddress(companyDetails.getAddress());
        company.setCity(companyDetails.getCity());
        company.setProvince(companyDetails.getProvince());
        company.setMerchant_categories(companyDetails.getMerchant_categories());
        company.setPhone(companyDetails.getPhone());

        Company updateCompany = companyRepository.save(company);
        return ResponseEntity.ok(updateCompany);
    }
}