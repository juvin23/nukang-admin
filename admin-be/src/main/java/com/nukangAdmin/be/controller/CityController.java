package com.nukangAdmin.be.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import com.nukangAdmin.be.model.City;
import com.nukangAdmin.be.repository.CityRepository;

@RestController
@RequestMapping("/api/v1/")
public class CityController {
    @Autowired
    private CityRepository cityRepository;

    @GetMapping("/city")
    public List<City> getCityList(){return  cityRepository.findAll();}

    @PostMapping("/city")
    public City addCity(@RequestBody City cityDetails){
        Optional<City> city = cityRepository.findById(cityDetails.getCityCode());
        if (city.isPresent()) {
            throw new ResourceAccessException("Id already used");
        } else {
            return cityRepository.save(cityDetails);
        }
    }

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

        city.setCityCode(cityDetails.getCityCode());
        city.setCityName(cityDetails.getCityName());

        City updateCity = cityRepository.save(city);
        return ResponseEntity.ok(updateCity);
    }

}
