package com.example.BurgerSeeker.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public abstract class Comida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false)
    private Float precio;

    @Column(columnDefinition = "LONGTEXT",nullable = false)
    private String descripcion;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_imagen_comida",referencedColumnName = "id")
    private Imagen imagen;
}
