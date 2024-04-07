package com.example.testback.utilisateur.repository;

import com.example.testback.utilisateur.Tache;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TacheRepository extends JpaRepository<Tache,Long> {
}
