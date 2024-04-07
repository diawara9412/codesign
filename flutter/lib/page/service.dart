import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:tuto1/page/model.dart';

class Userservice{
final String baseUrl = 'http://localhost:8080/api';

  Future<Tache> create(Tache tache) async {
    final url = Uri.parse('${baseUrl}/AddTache');
    final encoderUser = json.encode(tache.toJson());
    Map<String,String> headers = {"Content-Type":"application/json"};
    final response = await http.post(url, body: encoderUser,headers: headers);
    print("${response.body}");
    if (response.statusCode == 200) {
      return Tache.fromJson(json.decode(response.body));
    } else {
      throw Exception('Erreur lors de la création de tache');
    }
  }

  Future<List<Tache>> list() async {
    final url = Uri.parse('${baseUrl}/AllTache');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final users = json.decode(response.body) as List;
      return users.map((user) => Tache.fromJson(user)).toList();
    } else {
      throw Exception('Erreur lors de la liste des tache');
    }
  }

  void deleteTache(int? id) async {
  // Effectuer une requête HTTP pour supprimer l'utilisateur
  final response = await http.delete(
    Uri.parse('${baseUrl}/deleteTache/${id}'),
  );

  // Vérifier le code de réponse
  if (response.statusCode == 200) {
    // L'utilisateur a été supprimé avec succès
  } else {
    throw Exception('Erreur de la suppression');
  }
}

Future<void> updateTache(Tache tache) async {
  // Effectuer une requête HTTP pour mettre à jour l'utilisateur
  final response = await http.put(
    Uri.parse('${baseUrl}/UpdateTache'),
    headers: {'Content-Type': 'application/json'},
    body: json.encode(tache.toJson()),
  );

  // Vérifier le code de réponse
  if (response.statusCode == 200) {
    print('modifier');
  } else {
    throw Exception('Erreur de la suppression');
  }
}
Future<Tache> getTacheById(int? id) async{
final response = await http.get(Uri.parse('${baseUrl}/TacheById/${id}'));

if(response.statusCode == 200 ){
  
   return Tache.fromJson(json.decode(response.body));
    } else {
      throw Exception('Erreur lors de la création de Tache');
    }
}



}