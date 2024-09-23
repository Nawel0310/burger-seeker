package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.ComidaDTO;
import com.example.BurgerSeeker.model.Comida;
import com.example.BurgerSeeker.model.Hamburguesa;
import com.example.BurgerSeeker.service.ComidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public abstract class ComidaController<T extends Comida,D extends ComidaDTO> {

    @Autowired
    protected ComidaService<T,D> comidaService;

    @PostMapping
    public ResponseEntity<D> guardarComida(@RequestBody D comidaDTO){
        T comidaGuardada = comidaService.guardarComida(comidaDTO);
        return ResponseEntity.ok(comidaService.convertToDTO(comidaGuardada));
    }

    @PutMapping("/{id}")
    public ResponseEntity<D> actualizarComida(@PathVariable Integer id, @RequestBody D comidaDTO){
        comidaDTO.setId(id);
        try {
            T comidaActualizada = comidaService.actualizarComida(comidaDTO);
            return ResponseEntity.ok(comidaService.convertToDTO(comidaActualizada));

        } catch (IllegalArgumentException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<D> obtenerComidaPorId(@PathVariable Integer id){
        return comidaService.obtenerComidaPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        //.build() se utiliza para crear una respuesta sin un cuerpo en el contenido.
    }

    @GetMapping
    public ResponseEntity<List<D>> obtenerComidas(){
        return ResponseEntity.ok(comidaService.obtenerComidas());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarComida(@PathVariable Integer id){
        try{
            comidaService.eliminarComida(id);
            return ResponseEntity.noContent().build();
        } catch(IllegalArgumentException exception){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
