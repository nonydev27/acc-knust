package com.smartocquaye.accbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartocquaye.accbackend.dto.StatusResponse;

@RestController
@RequestMapping("/api")
public class StatusController {

    @GetMapping("/status")
    public StatusResponse status() {
        return new StatusResponse("Smart Ocquaye", "3146425", "2026/27", "ACC Backend Ready");
    }
}