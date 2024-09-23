package com.example.BurgerSeeker.service;

import com.example.BurgerSeeker.DTO.HamburguesaDTO;
import com.example.BurgerSeeker.model.Hamburguesa;
import com.example.BurgerSeeker.repository.HamburguesaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HamburguesaService {

    @Autowired
    private HamburguesaRepository comidaRepository;

    @Autowired
    private ImagenService imagenService;

    @Transactional
    public Hamburguesa guardarComida(HamburguesaDTO hamburguesaDTO){
        return comidaRepository.save(convertToEntity(hamburguesaDTO));
    }

    @Transactional
    public Hamburguesa actualizarComida(HamburguesaDTO hamburguesaDTO){
        Hamburguesa hamburguesa = comidaRepository.findById(hamburguesaDTO.getId())
                .orElseThrow(() -> new IllegalArgumentException("Comida no encontrada"));

        if(hamburguesaDTO.getImagenDTO()!=null){
            imagenService.eliminarImagen(hamburguesa.getImagen().getId());
            hamburguesa.setImagen(imagenService.convertToEntity(hamburguesaDTO.getImagenDTO()));
        }
        hamburguesa.setNombre(hamburguesaDTO.getNombre());
        hamburguesa.setDescripcion(hamburguesaDTO.getDescripcion());
        hamburguesa.setPrecio(hamburguesaDTO.getPrecio());


        return comidaRepository.save(hamburguesa);
    }

    public Optional<HamburguesaDTO> obtenerComidaPorId(Integer id){
        return comidaRepository.findById(id).map(this::convertToDTO);
    }

    public List<HamburguesaDTO> obtenerComidas(){
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

    public Hamburguesa convertToEntity(HamburguesaDTO hamburguesaDTO){
        Hamburguesa hamburguesa = new Hamburguesa();

        if (hamburguesaDTO.getId() != null) {
            hamburguesa.setId(hamburguesaDTO.getId());
        }
        hamburguesa.setNombre(hamburguesaDTO.getNombre());
        hamburguesa.setDescripcion(hamburguesaDTO.getDescripcion());
        hamburguesa.setPrecio(hamburguesaDTO.getPrecio());
        hamburguesa.setImagen(imagenService.convertToEntity(hamburguesaDTO.getImagenDTO()));

        return hamburguesa;
    }

    public HamburguesaDTO convertToDTO(Hamburguesa hamburguesa){
        HamburguesaDTO hamburguesaDTO = new HamburguesaDTO();

        hamburguesaDTO.setId(hamburguesa.getId());
        hamburguesaDTO.setNombre(hamburguesa.getNombre());
        hamburguesaDTO.setDescripcion(hamburguesa.getDescripcion());
        hamburguesaDTO.setPrecio(hamburguesa.getPrecio());
        hamburguesaDTO.setImagenDTO(imagenService.convertToDTO(hamburguesa.getImagen()));

        return hamburguesaDTO;
    }


}
