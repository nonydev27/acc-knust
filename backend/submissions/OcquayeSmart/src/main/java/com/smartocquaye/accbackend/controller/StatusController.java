package com.smartocquaye.accbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartocquaye.accbackend.config.ClubProperties;
import com.smartocquaye.accbackend.dto.StatusResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class StatusController {

    private final ClubProperties clubProperties;

    @GetMapping("/status")
    public StatusResponse status() {
        String secret = clubProperties.getSecretKey();
        boolean secretConfigured = secret != null && !secret.isBlank();
        return new StatusResponse("Smart Ocquaye", "3146425", "2026/27", "ACC Backend Ready", secretConfigured);
    }
}