package com.beyhanus.cors.controllers;

import com.beyhanus.cors.dtos.ContentDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @GetMapping("/hi")
    public ResponseEntity<ContentDto> greeting(){
        return ResponseEntity.ok(new ContentDto("hello from backend!"));
    }
}
