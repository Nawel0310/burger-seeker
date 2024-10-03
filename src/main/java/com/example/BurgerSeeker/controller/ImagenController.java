package com.example.BurgerSeeker.controller;


import com.example.BurgerSeeker.DTO.ImagenDTO;
import com.example.BurgerSeeker.model.Imagen;
import com.example.BurgerSeeker.service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagenes")
public class ImagenController {

    @Autowired
    private ImagenService imagenService;

    @PostMapping
    public ResponseEntity<ImagenDTO>guardarImagen(@RequestBody ImagenDTO imagenDTO){
        Imagen imagenGuardada = imagenService.guardarImagen(imagenDTO);
        return ResponseEntity.ok(imagenService.convertToDTO(imagenGuardada));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ImagenDTO> actualizarImagen(@PathVariable Integer id, @RequestBody ImagenDTO imagenDTO){
        imagenDTO.setId(id);
        try{
            Imagen imagenActualizada = imagenService.actualizarImagen(imagenDTO);
            return ResponseEntity.ok(imagenService.convertToDTO(imagenActualizada));

        }catch(IllegalArgumentException exception){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ImagenDTO> obtenerImagenPorId(@PathVariable Integer id){
        return imagenService.obtenerImagenPorId(id)
                .map(ResponseEntity::ok).orElseGet(()->ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping
    public ResponseEntity<List<ImagenDTO>> obtenerImagenes(){
        return ResponseEntity.ok(imagenService.obtenerImagenes());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarImagen(@PathVariable Integer id){
        try{
            imagenService.eliminarImagen(id);
            return ResponseEntity.noContent().build();
        }catch(IllegalArgumentException exception){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
