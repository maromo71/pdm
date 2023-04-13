import 'package:flutter/material.dart';
import 'product_form_page.dart';

class ProductListPage extends StatefulWidget {
  const ProductListPage({super.key});

  @override
  State<ProductListPage> createState() => _ProductListPageState();
}

class _ProductListPageState extends State<ProductListPage> {
  final List<String> _products = [
    '1, Bola, 14,00',
    '2, Meia, 13,00',
    '3, Tenis, 15,00',
  ];

  void _addProduct() async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const ProductFormPage()),
    );

    if (result != null) {
      setState(() {
        _products.add(result);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Produtos'),
      ),
      body: ListView.builder(
        itemCount: _products.length,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(
            title: Text(_products[index]),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addProduct,
        tooltip: 'Adicionar Produto',
        child: const Icon(Icons.add),
      ),
    );
  }
}

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
