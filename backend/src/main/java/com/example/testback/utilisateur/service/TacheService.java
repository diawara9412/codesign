package com.example.testback.utilisateur.service;



import com.example.testback.utilisateur.Tache;

import java.util.List;

public interface TacheService {
    List<Tache> AllTache();
    Tache AddTache(Tache tache);
    Tache UpdateTache(Tache tache);
    Tache TacheById(Long id);
    void DeleteTache(Long id);
}
