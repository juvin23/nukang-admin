package com.nukangAdmin.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nukangAdmin.be.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
