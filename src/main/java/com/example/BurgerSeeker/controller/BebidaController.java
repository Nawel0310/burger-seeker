package com.example.BurgerSeeker.controller;


import com.example.BurgerSeeker.DTO.BebidaDTO;
import com.example.BurgerSeeker.model.Bebida;
import com.example.BurgerSeeker.service.BebidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/menu/bebidas")
public class BebidaController implements ComidaController<BebidaDTO> {

    @Autowired
    private BebidaService bebidaService;

    @PostMapping
    @Override
    public ResponseEntity<BebidaDTO> guardarComida(@RequestBody BebidaDTO bebidaDTO) {
        Bebida bebidaGuardada = bebidaService.guardarComida(bebidaDTO);
        return ResponseEntity.ok(bebidaService.convertToDTO(bebidaGuardada));
    }

    @PutMapping("/{id}")
    @Override
    public ResponseEntity<BebidaDTO> actualizarComida(@PathVariable Integer id, @RequestBody BebidaDTO bebidaDTO) {
        bebidaDTO.setId(id);
        try {
            Bebida bebidaActualizada = bebidaService.actualizarComida(bebidaDTO);
            return ResponseEntity.ok(bebidaService.convertToDTO(bebidaActualizada));
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/{id}")
    @Override
    public ResponseEntity<BebidaDTO> obtenerComidaPorId(@PathVariable Integer id) {
        return bebidaService.obtenerComidaPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping
    @Override
    public ResponseEntity<List<BebidaDTO>> obtenerComidas() {
        return ResponseEntity.ok(bebidaService.obtenerComidas());
    }

    @DeleteMapping("/{id}")
    @Override
    public ResponseEntity<Void> eliminarComida(@PathVariable Integer id) {
        try {
            bebidaService.eliminarComida(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}

