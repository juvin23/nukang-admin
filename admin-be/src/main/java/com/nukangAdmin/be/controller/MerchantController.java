package com.nukangAdmin.be.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.nukangAdmin.be.model.AppUser;
import com.nukangAdmin.be.model.Merchant;
import com.nukangAdmin.be.repository.AppUserRepository;
import com.nukangAdmin.be.repository.MerchantRepository;

@RestController
@RequestMapping("/api/v1/")
public class MerchantController {
    @Autowired
    private MerchantRepository merchantRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @GetMapping("/merchant")
    public List<Merchant> getAllMerchant(){return merchantRepository.findAll();}

    @PostMapping("/merchant")
    public Merchant addMerchant(@RequestBody Merchant merchant){return merchantRepository.save(merchant);}

    @DeleteMapping("/merchant/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMerchant(@PathVariable String id){
        Merchant merchant = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        AppUser appUser = appUserRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        // Token token = tokenRepository.findByUserId(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        merchantRepository.delete(merchant);
        appUserRepository.delete(appUser);
        // tokenRepository.delete(token);

        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/merchant/{id}")
    public ResponseEntity<Merchant> getMerchantId(@PathVariable String id){
        Merchant mc = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(mc);
    }

    @PostMapping("merchant/update-status/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Merchant> updateMerchantStatus(@PathVariable String id, @RequestBody String status){
        System.out.println(id);
        Merchant merchant = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        merchant.setStatus(status);

        Merchant updateMerchant = merchantRepository.save(merchant);
        return ResponseEntity.ok(updateMerchant);
    }

    // @PostMapping("merchant/{id}")
    // @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    // public ResponseEntity<Merchant> updateMerchant(@PathVariable String id,@RequestBody Merchant mercCatDetails){
    //     Merchant mc = merchantRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

    //     mc.setCategory_id(mercCatDetails.getCategory_id());
    //     mc.setCategory_name(mercCatDetails.getCategory_name());

    //     Merchant updateMerchant = merchantRepository.save(mc);
    //     return ResponseEntity.ok(updateMerchant);
    // }
}
