package com.example.BurgerSeeker.repository;

import com.example.BurgerSeeker.model.Hamburguesa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HamburguesaRepository extends JpaRepository<Hamburguesa,Integer> {
}
