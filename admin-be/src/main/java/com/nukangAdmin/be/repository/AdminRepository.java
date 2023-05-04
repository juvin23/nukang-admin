package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
}
