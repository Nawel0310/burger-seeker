package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.PostreDTO;
import com.example.BurgerSeeker.model.Postre;
import com.example.BurgerSeeker.service.BebidaService;
import com.example.BurgerSeeker.service.PostreService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/postres")
public class PostreController extends ComidaController<Postre,PostreDTO> {

    @Autowired
    private PostreService postreService;
    
}
