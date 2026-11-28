package com.smartocquaye.smartaccbackend.controller;

import com.smartocquaye.smartaccbackend.Dtos.MemberRegistrationRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class BackendController {

    @GetMapping("/")
    public Map<String, Object> getStatus() {

        return Map.of(
                "name", "Smart Ocquaye",
                "index", "3146425",
                "year", 1,
                "status", "ACC Backend Ready"
        );
    }

    @PostMapping("/members")
    public ResponseEntity<Map<String, Object>> registerMember(
            @Valid @RequestBody MemberRegistrationRequest request) {

        Map<String, Object> response = Map.of(
                "message", "Member registration successful",
                "member", Map.of(
                        "name", request.getName(),
                        "email", request.getEmail()
                )
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}