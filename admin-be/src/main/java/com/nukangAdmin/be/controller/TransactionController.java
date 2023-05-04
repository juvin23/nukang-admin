package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.Transactions;
import com.nukangAdmin.be.repository.TransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class TransactionController {
    @Autowired
    private TransactionsRepository transactionsRepository;

    @GetMapping("/transaction")
    public List<Transactions> getTransactionList(){return transactionsRepository.findAll();}
}
