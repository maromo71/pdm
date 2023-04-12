import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  String _username = "";
  String _password = "";

  void _login() {
    if (_formKey.currentState!.validate()) {
      if (_username == "admin" && _password == "123") {
        Navigator.of(context).pushReplacementNamed('/home');
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Usuário ou senha inválido'),
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
      ),
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: 'Usuário'),
                onChanged: (value) {
                  setState(
                    () {
                      _username = value.trim();
                    },
                  );
                },
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira um usuário';
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Senha'),
                onChanged: (value) {
                  setState(
                    () {
                      _password = value.trim();
                    },
                  );
                },
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Por favor, insira uma senha';
                  }
                  return null;
                },
                obscureText: true,
              ),
              const SizedBox(
                height: 22,
              ),
              ElevatedButton(
                onPressed: _login,
                child: const Text('Entrar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
