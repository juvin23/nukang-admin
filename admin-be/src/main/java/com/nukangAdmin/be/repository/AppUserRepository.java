package com.nukangAdmin.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nukangAdmin.be.model.AppUser;


@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {
}
