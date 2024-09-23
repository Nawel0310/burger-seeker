package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.PostreDTO;
import com.example.BurgerSeeker.model.Postre;
import com.example.BurgerSeeker.service.PostreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu/postres")
public class PostreController {

    @Autowired
    private PostreService postreService;

    @PostMapping
    public ResponseEntity<PostreDTO> guardarComida(@RequestBody PostreDTO postreDTO){
        Postre postreGuardada = postreService.guardarComida(postreDTO);
        return ResponseEntity.ok(postreService.convertToDTO(postreGuardada));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostreDTO> actualizarComida(@PathVariable Integer id, @RequestBody PostreDTO postreDTO){
        postreDTO.setId(id);
        try {
            Postre postreActualizada = postreService.actualizarComida(postreDTO);
            return ResponseEntity.ok(postreService.convertToDTO(postreActualizada));

        } catch (IllegalArgumentException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<PostreDTO> obtenerComidaPorId(@PathVariable Integer id){
        return postreService.obtenerComidaPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        //.build() se utiliza para crear una respuesta sin un cuerpo en el contenido.
    }

    @GetMapping
    public ResponseEntity<List<PostreDTO>> obtenerComidas(){
        return ResponseEntity.ok(postreService.obtenerComidas());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarComida(@PathVariable Integer id){
        try{
            postreService.eliminarComida(id);
            return ResponseEntity.noContent().build();
        } catch(IllegalArgumentException exception){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
}
