package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.Ads;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdsRepository extends JpaRepository<Ads,Long> {
    Optional<Ads> findByName(String filename);
}
