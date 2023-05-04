package com.nukangAdmin.be.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigInteger;
import java.util.Date;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name="transaction_history_repository")
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private BigInteger id;

    @Column(name = "txn_id")
    private String txn_id;

    @JsonFormat(pattern = "yyyy-MM-dd  HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "txn_start_date")
    private Date txn_start_date;

    @JsonFormat(pattern = "yyyy-MM-dd  HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "txn_end_date")
    private Date txn_end_date;

    @Column(name = "record_status")
    private char record_status;

    @JsonFormat(pattern = "yyyy-MM-dd  HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "last_update")
    private Date last_update;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @Column(name = "created_date")
    private Date created_date;

    @Column(name = "dennied_reason")
    private String dennied_reason;

}