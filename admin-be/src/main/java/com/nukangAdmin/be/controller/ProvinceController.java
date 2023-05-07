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

import com.nukangAdmin.be.model.Province;
import com.nukangAdmin.be.repository.ProvinceRepository;

@RestController
@RequestMapping("/api/v1/")
public class ProvinceController {
    @Autowired
    private ProvinceRepository provinceRepository;

    @GetMapping("/province")
    public List<Province> getProvinceList(){return  provinceRepository.findAll();}

    @PostMapping("/province")
    public Province addProvince(@RequestBody Province province){return provinceRepository.save(province);}

    @DeleteMapping("/province/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteProvince(@PathVariable String id){
        Province province = provinceRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        provinceRepository.delete(province);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/province/{id}")
    public ResponseEntity<Province> getUserID(@PathVariable String id){
        Province province = provinceRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(province);
    }

    @PostMapping("province/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Province> updateUser(@PathVariable String id,@RequestBody Province provinceDetails){
        Province province = provinceRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        province.setProvinceCode(provinceDetails.getProvinceCode());
        province.setProvinceName(provinceDetails.getProvinceName());

        Province updateProvince = provinceRepository.save(province);
        return ResponseEntity.ok(updateProvince);
    }

}
