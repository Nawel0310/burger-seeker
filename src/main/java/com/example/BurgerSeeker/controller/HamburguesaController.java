package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.HamburguesaDTO;
import com.example.BurgerSeeker.model.Hamburguesa;
import com.example.BurgerSeeker.service.HamburguesaService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/hamburguesas")
public class HamburguesaController extends ComidaController<Hamburguesa, HamburguesaDTO> {

    @Autowired
    private HamburguesaService hamburguesaService;

    @PostConstruct
    public void init() {
        this.comidaService = hamburguesaService;
    }
}
