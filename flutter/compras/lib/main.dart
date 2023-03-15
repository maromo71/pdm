import 'package:compras/compras_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const AppCompras());
}

class AppCompras extends StatelessWidget {
  const AppCompras({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sistemas de Compras',
      theme: ThemeData(
        primarySwatch: Colors.deepPurple,
      ),
      home: const PageCompras(
        title: 'Compras - Sua escolha',
      ),
    );
  }
}
