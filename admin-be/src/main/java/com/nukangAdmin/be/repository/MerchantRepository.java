package com.nukangAdmin.be.repository;

import com.nukangAdmin.be.model.Merchant_Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MerchantRepository extends JpaRepository<Merchant_Category,String> {
}
