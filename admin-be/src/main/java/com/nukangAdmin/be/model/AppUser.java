package com.nukangAdmin.be.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "appuser")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppUser {
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
    
    @Column(name = "role")
    private String role;

    @Id
    @Column(name = "user_id")
    private String userId;

}
