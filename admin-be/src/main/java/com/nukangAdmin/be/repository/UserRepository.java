package com.nukangAdmin.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nukangAdmin.be.model.User;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
