package com.smartocquaye.accbackend.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartocquaye.accbackend.dto.MemberRegistrationRequest;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(
            @Valid @RequestBody MemberRegistrationRequest request) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("status", "success");
        body.put("message", "Member registered successfully");
        body.put("name", request.getName());
        body.put("email", request.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(body);
    }
}