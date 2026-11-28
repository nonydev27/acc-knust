package com.smartocquaye.accbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class StatusResponse {

    private final String name;
    private final String knustIndex;
    private final String year;
    private final String status;
    private final boolean secretKeyConfigured;
}