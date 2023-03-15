import 'package:flutter/material.dart';

class PageCompras extends StatefulWidget {
  const PageCompras({super.key, required this.title});

  final String title;

  @override
  State<PageCompras> createState() => _PageComprasState();
}

class _PageComprasState extends State<PageCompras> {
  bool _isCheckedArroz = false;
  bool _isCheckedLeite = false;
  bool _isCheckedCarne = false;
  bool _isCheckedCocaCola = false;
  String _precoCalculado = "";

  void _calcularPreco() {
    setState(() {
      double total = 0.0;
      _precoCalculado = "R\$ ";
      if (_isCheckedArroz) total += 23.99;
      if (_isCheckedLeite) total += 7.67;
      if (_isCheckedCarne) total += 43.89;
      if (_isCheckedCocaCola) total += 11.69;
      _precoCalculado += total.toStringAsFixed(2);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          widget.title,
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'Arroz - [ R\$ 23,99 ]',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
                Checkbox(
                    value: _isCheckedArroz,
                    onChanged: (value) {
                      setState(() {
                        _isCheckedArroz = value!;
                      });
                    })
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'Leite - [ R\$ 7,67]',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
                Checkbox(
                    value: _isCheckedLeite,
                    onChanged: (value) {
                      setState(() {
                        _isCheckedLeite = value!;
                      });
                    })
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'Carne - [ R\$ 43,99 ]',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
                Checkbox(
                    value: _isCheckedCarne,
                    onChanged: (value) {
                      setState(() {
                        _isCheckedCarne = value!;
                      });
                    })
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'Coca-cola - [ R\$ 11,69 ]',
                  style: TextStyle(
                    fontSize: 18,
                  ),
                ),
                Checkbox(
                    value: _isCheckedCocaCola,
                    onChanged: (value) {
                      setState(() {
                        _isCheckedCocaCola = value!;
                      });
                    })
              ],
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(children: [
                Container(
                  color: Colors.blueGrey,
                  width: double.infinity,
                  child: Center(
                    child: Text(
                      _precoCalculado,
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                )
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              children: [
                ElevatedButton(
                  onPressed: _calcularPreco,
                  child: const Text('Calcular'),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
