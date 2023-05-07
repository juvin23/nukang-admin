package com.nukangAdmin.be.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nukangAdmin.be.model.Customer;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

    // Optional<Customer> findByCustomerId(String id);
}
