package com.nukangAdmin.be.controller;


import com.nukangAdmin.be.model.Ads;
import com.nukangAdmin.be.repository.AdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.http.HttpClient;
import java.util.List;
import java.util.Optional;

@Service
@RestController
@RequestMapping("/api/v1/")
public class AdsController {
    @Autowired
    AdsRepository adsRepository;

    @Autowired
    ImaegUtilsService imaegUtilsService;

    @PostMapping("/ads")
    public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file)throws IOException{
     String uploadImage = imaegUtilsService.uploadImage(file);
     return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping("/ads/{filename}")
    public ResponseEntity<?> downloadImage(@PathVariable String filename){
        byte[] imageData = imaegUtilsService.downloadImage(filename);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }

}
