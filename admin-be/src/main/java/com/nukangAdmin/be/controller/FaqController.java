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

import com.nukangAdmin.be.model.Faq;
import com.nukangAdmin.be.repository.FaqRepository;

@RestController
@RequestMapping("/api/v1/")
public class FaqController {
    @Autowired
    private FaqRepository faqRepository;

    @GetMapping("/faq")
    public List<Faq> getFaqList(){return  faqRepository.findAll();}

    @PostMapping("/faq")
    public Faq addFaq(@RequestBody Faq faqDetails){return faqRepository.save(faqDetails);}
        // Optional<Faq> faq = faqRepository.findById(faqDetails.getId());
        // if (faq.isPresent()) {
        //     throw new ResourceAccessException("Id already used");
        // } else {
        //     return faqRepository.save(faqDetails);
        // }
    // }

    @DeleteMapping("/faq/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteFaq(@PathVariable Long id){
        Faq faq = faqRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        faqRepository.delete(faq);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/faq/{id}")
    public ResponseEntity<Faq> getUserID(@PathVariable Long id){
        Faq faq = faqRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));
        return ResponseEntity.ok(faq);
    }

    @PostMapping("faq/{id}")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public ResponseEntity<Faq> updateUser(@PathVariable Long id,@RequestBody Faq faqDetails){
        Faq faq = faqRepository.findById(id).orElseThrow(() -> new ResourceAccessException("Id not found"));

        faq.setQuestion(faqDetails.getQuestion());
        faq.setAnswer(faqDetails.getAnswer());

        Faq updateFaq = faqRepository.save(faq);
        return ResponseEntity.ok(updateFaq);
    }

}
