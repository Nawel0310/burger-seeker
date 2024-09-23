package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.HamburguesaDTO;
import com.example.BurgerSeeker.model.Hamburguesa;
import com.example.BurgerSeeker.service.HamburguesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/hamburguesas")
public class HamburguesaController {

    @Autowired
    private HamburguesaService hamburguesaService;

    @PostMapping
    public ResponseEntity<HamburguesaDTO> guardarComida(@RequestBody HamburguesaDTO hamburguesaDTO){
        Hamburguesa hamburguesaGuardada = hamburguesaService.guardarComida(hamburguesaDTO);
        return ResponseEntity.ok(hamburguesaService.convertToDTO(hamburguesaGuardada));
    }

    @PutMapping("/{id}")
    public ResponseEntity<HamburguesaDTO> actualizarComida(@PathVariable Integer id, @RequestBody HamburguesaDTO hamburguesaDTO){
        hamburguesaDTO.setId(id);
            try {
                Hamburguesa hamburguesaActualizada = hamburguesaService.actualizarComida(hamburguesaDTO);
                return ResponseEntity.ok(hamburguesaService.convertToDTO(hamburguesaActualizada));

            } catch (IllegalArgumentException exception) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

    }

    @GetMapping("/{id}")
    public ResponseEntity<HamburguesaDTO> obtenerComidaPorId(@PathVariable Integer id){
        return hamburguesaService.obtenerComidaPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.status(HttpStatus.NOT_FOUND).build());
                //.build() se utiliza para crear una respuesta sin un cuerpo en el contenido.
    }

    @GetMapping
    public ResponseEntity<List<HamburguesaDTO>> obtenerComidas(){
        return ResponseEntity.ok(hamburguesaService.obtenerComidas());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarComida(@PathVariable Integer id){
        try{
            hamburguesaService.eliminarComida(id);
            return ResponseEntity.noContent().build();
        } catch(IllegalArgumentException exception){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
