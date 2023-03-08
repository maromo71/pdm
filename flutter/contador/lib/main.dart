import 'package:contador/contador.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const Home());
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Contador',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Aplicativo Contador'),
        ),
        body: const Contador(),
      ),
    );
  }
}
