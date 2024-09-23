package com.example.BurgerSeeker.service;


import com.example.BurgerSeeker.DTO.PostreDTO;
import com.example.BurgerSeeker.model.Postre;
import com.example.BurgerSeeker.repository.PostreRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostreService {

    @Autowired
    private PostreRepository comidaRepository;

    @Autowired
    private ImagenService imagenService;

    @Transactional
    public Postre guardarComida(PostreDTO postreDTO){
        return comidaRepository.save(convertToEntity(postreDTO));
    }

    @Transactional
    public Postre actualizarComida(PostreDTO postreDTO){
        Postre postre = comidaRepository.findById(postreDTO.getId())
                .orElseThrow(() -> new IllegalArgumentException("Comida no encontrada"));

        if(postreDTO.getImagenDTO()!=null){
            imagenService.eliminarImagen(postre.getImagen().getId());
            postre.setImagen(imagenService.convertToEntity(postreDTO.getImagenDTO()));
        }
        postre.setNombre(postreDTO.getNombre());
        postre.setDescripcion(postreDTO.getDescripcion());
        postre.setPrecio(postreDTO.getPrecio());


        return comidaRepository.save(postre);
    }

    public Optional<PostreDTO> obtenerComidaPorId(Integer id){
        return comidaRepository.findById(id).map(this::convertToDTO);
    }

    public List<PostreDTO> obtenerComidas(){
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

    public Postre convertToEntity(PostreDTO postreDTO){
        Postre postre = new Postre();

        if (postreDTO.getId() != null) {
            postre.setId(postreDTO.getId());
        }
        postre.setNombre(postreDTO.getNombre());
        postre.setDescripcion(postreDTO.getDescripcion());
        postre.setPrecio(postreDTO.getPrecio());
        postre.setImagen(imagenService.convertToEntity(postreDTO.getImagenDTO()));

        return postre;
    }

    public PostreDTO convertToDTO(Postre postre){
        PostreDTO postreDTO = new PostreDTO();

        postreDTO.setId(postre.getId());
        postreDTO.setNombre(postre.getNombre());
        postreDTO.setDescripcion(postre.getDescripcion());
        postreDTO.setPrecio(postre.getPrecio());
        postreDTO.setImagenDTO(imagenService.convertToDTO(postre.getImagen()));

        return postreDTO;
    }
    
    
}
