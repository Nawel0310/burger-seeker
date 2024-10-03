package com.example.BurgerSeeker.controller;


import com.example.BurgerSeeker.DTO.BebidaDTO;
import com.example.BurgerSeeker.model.Bebida;
import com.example.BurgerSeeker.service.BebidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/bebidas")
public class BebidaController extends ComidaController<Bebida,BebidaDTO>{

    @Autowired
    private BebidaService bebidaService;

}
