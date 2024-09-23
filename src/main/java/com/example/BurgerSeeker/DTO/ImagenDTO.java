package com.example.BurgerSeeker.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImagenDTO {
    private Integer id;
    private String nombre;
    private String tipo;
    private byte[] datos;
}
