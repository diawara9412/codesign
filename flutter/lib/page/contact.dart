import 'package:flutter/material.dart';
import 'package:tuto1/page/model.dart';
import 'package:tuto1/page/service.dart';
import 'package:tuto1/page/update.dart';

class Contact extends StatefulWidget {
  const Contact({super.key});

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
  Tache user = Tache();
  Userservice _userservice = Userservice();
  List<Tache> tache= [];

  final _formkey = GlobalKey<FormState>();
  final TextEditingController texttitre = TextEditingController();
  //final TextEditingController textNom = TextEditingController();

  void initState() {
    super.initState();
    _fetchUsers();
  }

  Future<void> _fetchUsers() async {
    final users = await _userservice.list();
    setState(() {
      tache = users;
    });
  }

  
  
  Future<void> deleteTache(Tache tach) async {
  try {
    // Supprime la tâche de la base de données
    _userservice.deleteTache(tach.id);
    
    // Met à jour la liste des tâches dans l'état local
    setState(() {
      tache.removeWhere((element) => element.id == tach.id);
    });

    // Affiche un message de confirmation
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Tâche supprimée avec succès'),
        backgroundColor: Colors.red,
      ),
    );
  } catch (error) {
    print("Erreur lors de la suppression de la tâche : $error");
  }
}



  Future<void> addTache(Tache tach) async {
  try {
    // Ajoute la nouvelle tâche à la base de données
    await _userservice.create(tach);

    // Récupère à nouveau les tâches à partir de la base de données
    _fetchUsers();
  } catch (error) {
    print("Erreur lors de l'ajout de la tâche : $error");
  }
}

  Future<void> showBottomShet(Tache? tache) async {
   
    showModalBottomSheet(
      elevation: 5,
      isScrollControlled: true,
      context: context,
      builder: (context) => Container(
        padding: EdgeInsets.only(
          top: 30,
          left: 15,
          right: 15,
          bottom: MediaQuery.of(context).viewInsets.bottom + 50,
        ),
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Form(
                key: _formkey,
                child: Column(children: <Widget>[
                  TextFormField(
                    decoration: InputDecoration(
                        labelText: 'Titre', border: OutlineInputBorder()),
                    // onChanged: (value) {
                    //   user.prenom = value;
                    // },
                    controller: texttitre,
                  ),
                 
                 
                  SizedBox(
                    height: 10.0,
                  ),
                  Center(
                    child: OutlinedButton(
                        onPressed: () {
                          if (_formkey.currentState!.validate()) {
                            
                            if (tache == null) {
                              user.titre = texttitre.text;
                              
                              addTache(user);
                            }
                           
                           
                            Navigator.of(context).pop();
                            print(user);

                           
                          }
                        },
                        child: Text('cliquer')),
                  )
                ]),
              )
            ]),
      ),
    );
  }

  Color _color = Colors.black;
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        title: Text('Taches'),
        centerTitle: true,
        actions: [Icon(Icons.search)],
      ),
      body: ListView.builder(
        itemCount: tache.length,
        itemBuilder: (context, index) {
          var nameInitiale = tache[index].titre![0];
          // if(personne[index].image.length>0){
          //   nameInitiale ='';
          // }
          return Padding(
            padding: EdgeInsets.symmetric(vertical: 0.0, horizontal: 10.0),
            child: Card(
              child: ListTile(
  title: Row(
    children: [
      Expanded(
        child: Text(
          tache[index].titre!,
          style: TextStyle(
            color: Colors.orange,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      SizedBox(width: 10), // Espacement entre le titre et le statut
      Container(
        padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(4),
          color: tache[index].statut == 'Faire' ? Colors.blue : Colors.green,
        ),
        child: Text(
          tache[index].statut!,
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    ],
  ),
  leading: CircleAvatar(
    backgroundColor: _color,
    child: Text(
      nameInitiale,
      style: TextStyle(color: Colors.white, fontSize: 30.0),
    ),
  ),
  trailing: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      IconButton(
        onPressed: () {
          Navigator.push(context, MaterialPageRoute(builder: (context) => Update(tache: tache[index])));
        },
        icon: Icon(Icons.edit),
      ),
      IconButton(
        icon: Icon(Icons.delete),
        onPressed: () {
          showDialog(
            context: context,
            builder: (context) => AlertDialog(
              title: Text('Supprimer tâche'),
              content: Text('Voulez-vous vraiment supprimer la tâche "${tache[index].titre}" ?'),
              actions: [
                TextButton(
                  child: Text('Supprimer'),
                  onPressed: () {
                    deleteTache(tache[index]);
                    Navigator.of(context).pop();
                  },
                ),
                TextButton(
                  child: Text('Annuler'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          );
        },
      ),
    ],
  ),
)
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        // onPressed: (){
        //   Navigator.pushReplacementNamed(context, '/formulaire');
        // },
        onPressed: () => showBottomShet(null),
        tooltip: 'Ajouter',
        child: const Icon(Icons.add),
      ),
    );
  }
}
