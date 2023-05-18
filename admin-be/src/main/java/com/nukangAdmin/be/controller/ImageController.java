package com.nukangAdmin.be.controller;


import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/images")
public class ImageController {
    private final Logger log = LoggerFactory.getLogger(ImageController.class);
    private final ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity uploadImage(@RequestParam("directory") String directory,
                                      @RequestParam("image") MultipartFile file,
                                      HttpServletRequest request) throws IOException {
        try{
            log.info("----------------");
            log.info(file.getOriginalFilename());
            log.info(file.getName());
            log.info(file.getContentType());
            log.info("----------------");
            imageService.upload(directory, file);
        }catch (Exception e){
            e.printStackTrace();
        };
        return ResponseEntity.ok(file.getOriginalFilename());
    }

    @GetMapping("/get-profile-image/{userId}")
    @ResponseBody
    public ResponseEntity getImageDynamicType(@PathVariable(name = "userId") String uid) throws Exception {
        log.info("get profile image "+ uid);
        ResponseEntity res = null;
        try {
             res = imageService.getImage(uid);
        }catch (Exception e){
            log.info(e.getMessage());
        }
        return res;
    }
}
