package com.nukangAdmin.be.controller;


import java.io.IOException;
import java.time.LocalDate;

import com.nukangAdmin.be.model.Ads;
import com.nukangAdmin.be.model.ImageModel;
import com.nukangAdmin.be.repository.ImageModelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequiredArgsConstructor
@RequestMapping("/api/v1/")
public class AdsController {

    final AdsRepository adsRepository;

    private final ImageModelRepository imageModelRepository;

    final ImaegUtilsService imaegUtilsService;

    @PostMapping("/ads")
    public ResponseEntity<?> uploadImage(@RequestParam("image")MultipartFile file,
                                         @RequestParam("startDate")String startDate,
                                         @RequestParam("endDate")String endDate,
                                         @RequestParam("desc")String desc)throws IOException{
        Ads newAds = Ads.builder().name(file.getOriginalFilename())
                .desc(desc)
                .startDate(LocalDate.parse(startDate.split("T")[0]))
                .endDate(LocalDate.parse(endDate.split("T")[0]))
                .build();
        adsRepository.save(newAds);
        ImageModel promoBanner = ImageModel.builder()
                .name(file.getOriginalFilename())
                .data(ImageUtils.compressImage(file.getBytes())).build();
        imageModelRepository.save(promoBanner);
        return ResponseEntity.ok(newAds);
    }
}
