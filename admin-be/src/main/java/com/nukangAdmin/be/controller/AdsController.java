package com.nukangAdmin.be.controller;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nukangAdmin.be.repository.AdsRepository;

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
        //  String uploadImage = imaegUtilsService.uploadImage(file);
        //  return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
        return null;
    }

    @GetMapping("/ads/{filename}")
    public ResponseEntity<?> downloadImage(@PathVariable String filename){
        // byte[] imageData = imaegUtilsService.downloadImage(filename);
        // return ResponseEntity.status(HttpStatus.OK)
        //         .contentType(MediaType.valueOf("image/png"))
        //         .body(imageData);
        return null;
    }

}
