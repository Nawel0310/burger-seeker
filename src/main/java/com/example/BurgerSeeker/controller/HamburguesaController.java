package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.HamburguesaDTO;
import com.example.BurgerSeeker.model.Hamburguesa;
import com.example.BurgerSeeker.service.HamburguesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/hamburguesas")
public class HamburguesaController extends ComidaController<Hamburguesa, HamburguesaDTO> {

    @Autowired
    private HamburguesaService hamburguesaService;

}
