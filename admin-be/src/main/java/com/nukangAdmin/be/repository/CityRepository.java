package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City,String> {
}
