package com.example.testback.utilisateur.controller;

import com.example.testback.utilisateur.Tache;

import com.example.testback.utilisateur.service.TacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class TacheController {
    @Autowired
    TacheService tacheService;

    @PostMapping("AddTache")
    public Tache AddTache(@RequestBody Tache tache){
      return tacheService.AddTache(tache);
    }
    @GetMapping("AllTache")
    public List<Tache> AllTache(){
        return tacheService.AllTache();
    }
    @GetMapping("TacheById/{id}")
    public Tache TacheByID(@PathVariable("id") Long id){
        return tacheService.TacheById(id);
    }
    @PutMapping("UpdateTache")
    public Tache UpdateTache(@RequestBody Tache tache){
        return tacheService.UpdateTache(tache);
    }
    @DeleteMapping("deleteTache/{id}")
    public void DeleteTache(@PathVariable("id") Long id){
        tacheService.DeleteTache(id);
    }
}
