package com.nukangAdmin.be.model;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "transaction")
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "txn_id")
    private String transactionId;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "created_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+7")
    private LocalDateTime createdDate;

    @Column(name = "customer_id")
    private String customerId;

    @Column(name = "denied_reason")
    private String deniedReason;

    @Column(name = "txn_end_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    @Column(name = "is_seen")
    private int isSeen;

    @Column(name = "last_update")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone="GMT+7")
    private LocalDateTime lastUpdated;

    @Column(name = "update_by")
    String updateBy;

    @Column(name = "merchant_id")
    private String merchantId;

    @Column(name = "province")
    private String provinceCode;

    @Column(name = "record_status")
    private String recordStatus;

    @Column(name = "txn_start_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @Column(name = "city")
    private String cityCode;

    @Column(name = "address")
    private String address;

    @Column(name = "description")
    private String description;
}