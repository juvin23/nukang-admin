package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.City;
import com.nukangAdmin.be.model.Merchant_Category;
import com.nukangAdmin.be.model.User;
import com.nukangAdmin.be.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class CityController {
    @Autowired
    private CityRepository cityRepository;

    @GetMapping("/city")
    public List<City> getCityList(){return  cityRepository.findAll();}

    @PostMapping("/city")
    public City addCity(@RequestBody City city){return cityRepository.save(city);}

    @DeleteMapping("/city/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCity(@PathVariable String id){
        City city = cityRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        cityRepository.delete(city);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<City> getUserID(@PathVariable String id){
        City city = cityRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(city);
    }

    @PostMapping("city/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<City> updateUser(@PathVariable String id,@RequestBody City cityDetails){
        City city = cityRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        city.setCity_id(cityDetails.getCity_id());
        city.setCity_name(cityDetails.getCity_name());

        City updateCity = cityRepository.save(city);
        return ResponseEntity.ok(updateCity);
    }

}
