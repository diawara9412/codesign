import 'package:flutter/material.dart';
import 'package:tuto1/page/contact.dart';
import 'package:tuto1/page/model.dart';
import 'package:tuto1/page/service.dart';

class Update extends StatefulWidget {
  final Tache tache;
  
  const Update({super.key,required this.tache});

  @override
  State<Update> createState() => _UpdateState();
}

class _UpdateState extends State<Update> {
  
   Userservice _userservice = Userservice();
  late Tache _tache; 

  final _formkey = GlobalKey<FormState>();
  final TextEditingController textTitre =TextEditingController();
  final TextEditingController textStatut =TextEditingController();

   String? _selectedStatut;

  List<String> _statuts = ['Faire', 'Terminer']; // Liste des options pour le statut

    // Personne personne = Personne();
  

     @override
    void initState() {
      super.initState();
      loadUseData();
    }
    Future<void> loadUseData() async{
      try{
         Tache loadUser =  await _userservice.getTacheById(widget.tache.id);
         setState(() {
           _tache = loadUser;
           textTitre.text = _tache.titre!;
           textStatut.text= _tache.statut!;
           _selectedStatut = _tache.statut;
           print(_tache.id);
         });
      }catch(error){
        print('error lors du chargement de donner');
      }
    }
    // Future<void> modiUser() async{
    //   try{
    //      _tache.titre=textTitre.text;
    //      _tache.statut=textStatut.text;
    //      print(_tache.id);
    //      await _userservice.updateTache(_tache);
    //      Navigator.push(context, MaterialPageRoute(builder: (context)=>Contact()));
    //   }catch(error){
    //      print('erreur de modification');
    //   }
    // }
    Future<void> modiUser() async {
  try {
   
    _tache.titre = textTitre.text;
    // _tache.statut = textStatut.text;
    _tache.statut = _selectedStatut;
    print('Tâche mise à jour : $_tache'); // Affiche les données mises à jour
    await _userservice.updateTache(_tache);
    Navigator.push(context, MaterialPageRoute(builder: (context) => Contact()));
  } catch(error) {
    print('erreur de modification : $error');
  }
}
   void modifierUser(Tache tache) async{
   _userservice.updateTache(tache);
    // Navigator.push(context, MaterialPageRoute(builder: (context)=>Contact()));
   }
  @override
  Widget build(BuildContext context) {


   
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Formulaire',
          style: TextStyle(color: Colors.blueAccent),
        ),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
            margin: EdgeInsets.symmetric(horizontal: 30.0, vertical: 50.0),
            child: Form(
              key: _formkey,
              child: Column(children: <Widget>[
                TextFormField(
                  decoration: InputDecoration(
                      labelText: 'Titre', border: OutlineInputBorder()),
                // initialValue: widget.personne.prenom,  
                controller: textTitre,
                ),
                SizedBox(height: 10.0),
               DropdownButtonFormField<String>(
                  value: _selectedStatut,
                  items: _statuts.map((String statut) {
                    return DropdownMenuItem<String>(
                      value: statut,
                      child: Text(statut),
                    );
                  }).toList(),
                  onChanged: (String? value) {
                    setState(() {
                      _selectedStatut = value;
                    });
                  },
                  decoration: InputDecoration(
                    labelText: 'Statut',
                    border: OutlineInputBorder()
                  ),
                ),
                //   SizedBox(height: 10.0,),
                //   TextFormField(
                // decoration: InputDecoration(
                //   labelText: 'confirm password',
                //   border: OutlineInputBorder()
                //   ),
                //   ),
                SizedBox(
                  height: 10.0,
                ),
                OutlinedButton(
                    onPressed: () {
                      if (_formkey.currentState!.validate()) {
                      
                        //  _userservice.create(personne);
                        // Navigator.pop(context);
                       
                           modiUser();
                        // modifierUser(widget.personne);
                        // print(widget.personne);
                        
                        //  Navigator.pushReplacementNamed(context,'/contact');
                        
                          
                      }
                    },
                    child: Text('cliquer'))
              ]),
            )
            ),
      ),
    );
  }
}