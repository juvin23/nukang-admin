package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Province,String> {
}
