class Tache{
late int? id;
late String? titre;
late String? statut;


Tache({this.id,this.titre,this.statut});


factory Tache.fromJson(Map<String,dynamic>json){
  return Tache(id : json['id'], titre: json['titre'],statut: json['statut']);
}

  Map<String, dynamic> toJson() {
    return {
      'id':id,
      'titre': titre,
      'statut': statut,
    };
  }


}