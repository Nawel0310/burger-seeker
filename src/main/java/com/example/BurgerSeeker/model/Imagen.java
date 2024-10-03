package com.example.BurgerSeeker.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nombre_archivo",nullable = false)
    private String nombre;

    @Column(name="tipo_archivo", nullable = false)
    private String tipo;

    @Lob
    @Column(name="datos_imagen",nullable = false, columnDefinition = "LONGBLOB")
    private byte[] datos;

}
