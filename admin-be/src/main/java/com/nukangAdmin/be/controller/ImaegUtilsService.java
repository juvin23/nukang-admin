package com.nukangAdmin.be.controller;

import com.nukangAdmin.be.model.Ads;
import com.nukangAdmin.be.repository.AdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImaegUtilsService {
    @Autowired
    private AdsRepository adsRepository;

    public String uploadImage(MultipartFile file) throws IOException {
        Ads imageData = adsRepository.save(Ads.builder()
                .name(file.getOriginalFilename())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if (imageData!= null){
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return  null;
    }

    public byte[] downloadImage(String filename){
        Optional<Ads> dbImageData = adsRepository.findByName(filename);
        byte[] images = ImageUtils.decompressImage(dbImageData.get().getImageData());
        return images;
    }
}
