package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface TransactionsRepository extends JpaRepository<Transactions, BigInteger> {
}
