package com.playground.keycloackvillage.controller;

import java.util.List;

public record UserDto(String name, String email, List<String> roles) {
}
