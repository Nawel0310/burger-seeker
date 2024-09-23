package com.example.BurgerSeeker.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="hamburguesas")
public class Hamburguesa extends Comida{
}
