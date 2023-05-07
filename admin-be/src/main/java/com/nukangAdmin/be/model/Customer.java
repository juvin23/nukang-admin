package com.nukangAdmin.be.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "customer")
@Getter
@Setter
public class Customer extends Audited {
    @Id
    @Column(name = "customer_id")
    private String customerId;

    @Column(name = "customer_name")
    private String name;

    @Column(name = "customer_birthdate")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    LocalDate birthdate;

    @Column(name = "customer_email")
    String email;

    @Column(name = "customer_number")
    String number;

    @Column(name = "customer_address")
    String address;

    @Column(name = "customer_province")
    String provinceCode;

    @Column(name = "customer_city")
    String cityCode;

    @Column(name = "last_login")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    LocalDateTime lastLogin;

    @OneToOne
    @JoinColumn(name = "customer_province",updatable = false,insertable = false)
    private Province province;

    @OneToOne
    @JoinColumn(name = "customer_city",updatable = false,insertable = false)
    private City city;

    public Customer(){
        setCreatedOn(LocalDateTime.now());
        setCreatedBy("System");
    }
}
