package com.nukangAdmin.be.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
    @Table(name="admin")
    @AllArgsConstructor
    @Data
    @NoArgsConstructor
    
    public class Admin {
        @Id
        @Column(name = "user_id")
        private String userId;

        @Column(name = "password")
        private String password;

    }