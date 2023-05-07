package com.nukangAdmin.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nukangAdmin.be.model.Faq;

@Repository
public interface FaqRepository extends JpaRepository<Faq,Long> {
}
