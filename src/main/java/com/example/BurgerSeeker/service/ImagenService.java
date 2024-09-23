package com.example.BurgerSeeker.service;

import com.example.BurgerSeeker.DTO.ImagenDTO;
import com.example.BurgerSeeker.model.Imagen;
import com.example.BurgerSeeker.repository.ImagenRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ImagenService {

    //Con Autowired las dependencias se inyectan automaticamente,
    // sin necesidad de un constructor
    @Autowired
    private ImagenRepository imagenRepository;

    @Transactional //Tratamos el método como una única unidad para guardar en la BD
    public Imagen guardarImagen(ImagenDTO imagenDTO){
        return imagenRepository.save(convertToEntity(imagenDTO));
    }

    @Transactional
    public Imagen actualizarImagen(ImagenDTO imagenDTO){
        if(imagenRepository.existsById(imagenDTO.getId())){
            return imagenRepository.save(convertToEntity(imagenDTO));
        }
        else{
            throw new IllegalArgumentException("La imagen con ID" +imagenDTO.getId()+" no se encuentra en la BD");
        }
    }

    public Optional<ImagenDTO> obtenerImagenPorId(Integer id){
        return imagenRepository.findById(id).map(this::convertToDTO);
    }

    public List<ImagenDTO> obtenerImagenes(){
        return imagenRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }


    @Transactional
    public void eliminarImagen(Integer id){
        if (imagenRepository.existsById(id)){
            imagenRepository.deleteById(id);
        }
        else{
            throw new IllegalArgumentException("La imagen con ID" +id+" no se encuentra en la BD");
        }
    }

    public ImagenDTO convertToDTO(Imagen imagen){
        ImagenDTO imagenDTO = new ImagenDTO();

        imagenDTO.setId(imagen.getId());
        imagenDTO.setDatos(imagen.getDatos());
        imagenDTO.setTipo(imagen.getTipo());
        imagenDTO.setNombre(imagen.getNombre());

        return imagenDTO;
    }

    public Imagen convertToEntity(ImagenDTO imagenDTO){
        Imagen imagen = new Imagen();

        imagen.setId(imagenDTO.getId());
        imagen.setDatos(imagenDTO.getDatos());
        imagen.setTipo(imagenDTO.getTipo());
        imagen.setNombre(imagenDTO.getNombre());

        return imagen;
    }


}
