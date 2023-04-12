import 'package:flutter/material.dart';
import 'package:navega/loginpage.dart';
import 'package:navega/principalpage.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Exemplo Login',
        theme: ThemeData(
          primarySwatch: Colors.deepOrange,
        ),
        initialRoute: '/',
        routes: {
          '/': (context) => const LoginPage(),
          '/home': (context) => const PrincipalPage(),
        });
  }
}
