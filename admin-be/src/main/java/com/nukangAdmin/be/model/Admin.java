package com.nukangAdmin.be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
    @Table(name="AdminRepository")
    @AllArgsConstructor
    @Data
    @NoArgsConstructor
    
    public class Admin {
        @Id
        @Column(name = "userId")
        private String userId;

        @Column(name = "password")
        private String password;

    }