package com.example.BurgerSeeker.service;


import com.example.BurgerSeeker.DTO.BebidaDTO;
import com.example.BurgerSeeker.model.Bebida;
import com.example.BurgerSeeker.model.Bebida;
import com.example.BurgerSeeker.repository.BebidaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BebidaService {

    @Autowired
    private BebidaRepository comidaRepository;

    @Autowired
    private ImagenService imagenService;

    @Transactional
    public Bebida guardarComida(BebidaDTO bebidaDTO){
        return comidaRepository.save(convertToEntity(bebidaDTO));
    }

    @Transactional
    public Bebida actualizarComida(BebidaDTO bebidaDTO){
        Bebida bebida = comidaRepository.findById(bebidaDTO.getId())
                .orElseThrow(() -> new IllegalArgumentException("Comida no encontrada"));

        if(bebidaDTO.getImagenDTO()!=null){
            imagenService.eliminarImagen(bebida.getImagen().getId());
            bebida.setImagen(imagenService.convertToEntity(bebidaDTO.getImagenDTO()));
        }
        bebida.setNombre(bebidaDTO.getNombre());
        bebida.setDescripcion(bebidaDTO.getDescripcion());
        bebida.setPrecio(bebidaDTO.getPrecio());


        return comidaRepository.save(bebida);
    }

    public Optional<BebidaDTO> obtenerComidaPorId(Integer id){
        return comidaRepository.findById(id).map(this::convertToDTO);
    }

    public List<BebidaDTO> obtenerComidas(){
        return comidaRepository.findAll()
                .stream()
                .map(comida -> convertToDTO(comida))
                .collect(Collectors.toList());
    }

    @Transactional
    public void eliminarComida(Integer id){
        if(comidaRepository.existsById(id)){
            comidaRepository.deleteById(id);
        }
        else{
            throw new IllegalArgumentException("La comida con ID" +id+" no se encuentra en la BD");
        }
    }

    public Bebida convertToEntity(BebidaDTO bebidaDTO){
        Bebida bebida = new Bebida();

        if (bebidaDTO.getId() != null) {
            bebida.setId(bebidaDTO.getId());
        }
        bebida.setNombre(bebidaDTO.getNombre());
        bebida.setDescripcion(bebidaDTO.getDescripcion());
        bebida.setPrecio(bebidaDTO.getPrecio());
        bebida.setImagen(imagenService.convertToEntity(bebidaDTO.getImagenDTO()));

        return bebida;
    }

    public BebidaDTO convertToDTO(Bebida bebida){
        BebidaDTO bebidaDTO = new BebidaDTO();

        bebidaDTO.setId(bebida.getId());
        bebidaDTO.setNombre(bebida.getNombre());
        bebidaDTO.setDescripcion(bebida.getDescripcion());
        bebidaDTO.setPrecio(bebida.getPrecio());
        bebidaDTO.setImagenDTO(imagenService.convertToDTO(bebida.getImagen()));

        return bebidaDTO;
    }

}
