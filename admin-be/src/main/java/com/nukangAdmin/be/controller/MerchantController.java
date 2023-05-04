package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.City;
import com.nukangAdmin.be.model.Merchant_Category;
import com.nukangAdmin.be.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class MerchantController {
    @Autowired
    private MerchantRepository merchantRepository;

    @GetMapping("/merchant")
    public List<Merchant_Category> getAllCategory(){return merchantRepository.findAll();}

    @PostMapping("/merchant")
    public Merchant_Category addMC(@RequestBody Merchant_Category mc){return merchantRepository.save(mc);}

    @DeleteMapping("/merchant/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCity(@PathVariable String id){
        Merchant_Category mc = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        merchantRepository.delete(mc);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/merchant/{id}")
    public ResponseEntity<Merchant_Category> getMercCatId(@PathVariable String id){
        Merchant_Category mc = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(mc);
    }

    @PostMapping("merchant/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Merchant_Category> updateMercCat(@PathVariable String id,@RequestBody Merchant_Category mercCatDetails){
        Merchant_Category mc = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        mc.setCategory_id(mercCatDetails.getCategory_id());
        mc.setCategory_name(mercCatDetails.getCategory_name());

        Merchant_Category updateMercCat = merchantRepository.save(mc);
        return ResponseEntity.ok(updateMercCat);
    }
}
