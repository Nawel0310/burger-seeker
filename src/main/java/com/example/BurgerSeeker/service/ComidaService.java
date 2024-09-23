package com.example.BurgerSeeker.service;


import java.util.List;
import java.util.Optional;

public interface ComidaService<T, D> {
    T guardarComida(D comidaDTO);
    T actualizarComida(D comidaDTO);
    Optional<D> obtenerComidaPorId(Integer id);
    List<D> obtenerComidas();
    void eliminarComida(Integer id);
    D convertToDTO(T comida);
    T convertToEntity(D comidaDTO);
}
