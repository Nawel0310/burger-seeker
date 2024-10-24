package com.example.BurgerSeeker.controller;

import com.example.BurgerSeeker.DTO.ComidaDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ComidaController<D extends ComidaDTO> {

    ResponseEntity<D> guardarComida(D comidaDTO);
    ResponseEntity<D> actualizarComida(Integer id, D comidaDTO);
    ResponseEntity<D> obtenerComidaPorId(Integer id);
    ResponseEntity<List<D>> obtenerComidas();
    ResponseEntity<Void> eliminarComida(Integer id);

    
}
