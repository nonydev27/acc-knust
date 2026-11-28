package com.smartocquaye.accbackend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberRegistrationRequest {

    @NotBlank(message = "name must not be empty")
    private String name;

    @Email(message = "Enter a valid email")
    @NotBlank(message = "email must not be empty")
    private String email;
}