package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageModelRepository extends JpaRepository<ImageModel,String> {
    Optional<ImageModel> findByName(String uid);
}
