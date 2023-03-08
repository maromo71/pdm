import 'package:flutter/material.dart';

class Contador extends StatefulWidget {
  const Contador({super.key});

  @override
  State<Contador> createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  int contador = 0;

  void incrementarContador() {
    setState(() {
      contador++;
    });
  }

  void decrementarContador() {
    setState(() {
      contador--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text(
            'Contador',
            style: TextStyle(
              fontSize: 36.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(
            height: 18.0,
          ),
          Text(
            'Valor: $contador',
            style: const TextStyle(
              fontSize: 28.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(
            height: 18.0,
          ),
          ElevatedButton(
            onPressed: decrementarContador,
            child: const Text('[ - ]'),
          ),
          const SizedBox(
            height: 18.0,
          ),
          ElevatedButton(
            onPressed: incrementarContador,
            child: const Text('[ + ]'),
          ),
        ],
      ),
    );
  }
}
