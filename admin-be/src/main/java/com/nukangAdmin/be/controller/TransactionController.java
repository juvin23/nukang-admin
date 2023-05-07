package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.Transaction;
import com.nukangAdmin.be.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping("/transaction")
    public List<Transaction> getTransactionList(){return transactionRepository.findAll();}
}
