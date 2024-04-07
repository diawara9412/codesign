import 'package:flutter/material.dart';
import 'package:tuto1/page/contact.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
    theme: ThemeData(
        primarySwatch: Colors.orange,
       
      ),
      debugShowCheckedModeBanner: false,
       initialRoute: '/contact',
     routes: {
      '/contact':(context) => Contact(),
      
     },
      home: const Contact(),
    );
  }
}





navigateTo(BuildContext context, Widget page) {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) {
      return page;
    }),
  );
}