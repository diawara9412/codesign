package com.example.testback.utilisateur.service;

import com.example.testback.utilisateur.Statut;
import com.example.testback.utilisateur.Tache;

import com.example.testback.utilisateur.repository.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TacheServiceImpl implements TacheService {
    @Autowired
    TacheRepository tacheRepository;
    @Override
    public List<Tache> AllTache() {
        return tacheRepository.findAll();
    }

    @Override
    public Tache AddTache(Tache tache) {


        tache.setStatut(Statut.Faire); // Je présume que "FAIRE" est une valeur de votre énumération Statut
        return tacheRepository.save(tache);
    }

    @Override
    public Tache UpdateTache(Tache tache) {
        Tache existant = tacheRepository.findById(tache.getId()).get();
        existant.setTitre(tache.getTitre());
        existant.setStatut(tache.getStatut());
        return tacheRepository.save(existant);
    }

    @Override
    public Tache TacheById(Long id) {
        return tacheRepository.findById(id).get();
    }

    @Override
    public void DeleteTache(Long id) {
         tacheRepository.deleteById(id);
    }
}
