package com.nukang.app.image;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;

@Service
@RequiredArgsConstructor
public class ImageService {
    static String BASE_DIR = System.getProperty("user.dir");
    private final ImageModelRepository imageRepository;
    public String upload(String directory, MultipartFile file) throws Exception {
        if(file == null || file.getOriginalFilename() == null) throw new Exception("upload image failed");
        ImageModel image = ImageModel.builder()
                .name(StringUtils.cleanPath(file.getOriginalFilename()))
                .contentType(file.getContentType())
                .data(ImageUtils.compressImage(file.getBytes()))
                .size(file.getSize())
                .build();
        imageRepository.save(image);
        return image.getName();
    }

    public ResponseEntity getImage(String uid) {
        ImageModel imageData = imageRepository.findByName(uid).orElse(null);
        if(imageData == null){
            try {
                if(BASE_DIR.startsWith("/"))BASE_DIR = BASE_DIR.substring(1);
                Resource resource = new UrlResource("file:///"+BASE_DIR+"/userResources/placeholder.png");
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_PNG)
                        .body(resource);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        byte[] image = ImageUtils.decompressImage(imageData.getData());
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(image);
    }

    public ResponseEntity getPromosi(String uid) {
        ImageModel imageData = imageRepository.findByName(uid).orElse(null);
        if(imageData == null){
            try {
                if(BASE_DIR.startsWith("/"))BASE_DIR = BASE_DIR.substring(1);
                Resource resource = new UrlResource("file:///"+BASE_DIR+"/userResources/promosi.jpg");
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_PNG)
                        .body(resource);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        byte[] image = ImageUtils.decompressImage(imageData.getData());
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(image);
    }
}
