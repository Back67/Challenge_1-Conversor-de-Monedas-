package com.alura.conversor.controller;

import com.alura.conversor.service.ConversionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/conversion")
public class ConversionController {

    @Autowired
    private ConversionService conversionService;

    @GetMapping
    public double convertCurrency(@RequestParam String from, @RequestParam String to, @RequestParam double amount) {
        return conversionService.convertCurrency(from, to, amount);
    }
}
