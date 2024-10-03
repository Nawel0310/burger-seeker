package com.example.BurgerSeeker.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ComidaDTO  {
    private Integer id;
    private String nombre;
    private Float precio;
    private String descripcion;
    private ImagenDTO imagenDTO;
}
