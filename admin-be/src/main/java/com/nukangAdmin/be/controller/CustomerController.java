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

import com.nukangAdmin.be.model.AppUser;
import com.nukangAdmin.be.model.Customer;
import com.nukangAdmin.be.repository.AppUserRepository;
import com.nukangAdmin.be.repository.CustomerRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;
    
    @Autowired
    private AppUserRepository appUserRepository;

    //get all customer data
    @GetMapping("/customers")
    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerID(@PathVariable String id){
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(customer);
    }

    @PostMapping("customers/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Customer> updateCustomer(@PathVariable String id,@RequestBody Customer customerDetails){
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        customer.setStatus(customerDetails.getStatus());

        // customer.setName(customerDetails.getName());
        // customer.setEmail(customerDetails.getEmail());
        // customer.setAddress(customerDetails.getAddress());
        // customer.setPhone(customerDetails.getPhone());

        Customer updateCustomer = customerRepository.save(customer);
        return ResponseEntity.ok(updateCustomer);
    }

    @PostMapping("customers/update-status/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Customer> updateCustomerStatus(@PathVariable String id, @RequestBody String status){
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        customer.setStatus(status);

        Customer updateCustomer = customerRepository.save(customer);
        return ResponseEntity.ok(updateCustomer);
    }

    @DeleteMapping("customers/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteCustomer(@PathVariable String id){
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        AppUser appUser = appUserRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        // Token token = tokenRepository.findByUserId(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        customerRepository.delete(customer);
        appUserRepository.delete(appUser);
        // tokenRepository.delete(token);

        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
