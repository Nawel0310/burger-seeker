package com.example.BurgerSeeker.DTO;

public interface ComidaDTO {
    Integer getId();

    String getNombre();

    Float getPrecio();

    String getDescripcion();

    ImagenDTO getImagenDTO();

    void setId(Integer id);

    void setNombre(String nombre);

    void setPrecio(Float precio);

    void setDescripcion(String descripcion);

    void setImagenDTO(ImagenDTO imagenDTO);
}
