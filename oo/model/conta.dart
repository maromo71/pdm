class Conta {
  int? numConta;
  String? nomeCliente;
  double _saldo = 0;

  Conta(this.numConta, this.nomeCliente) {}

  void depositar(double valor) {
    _saldo += valor;
  }

  void sacar(double valor) {
    if (_saldo >= valor) {
      _saldo -= valor;
    }
  }

  double get saldo {
    return _saldo;
  }

  void set saldo(double saldo) {
    _saldo = saldo;
  }

  @override
  String toString() {
    return "Num. Conta $numConta \n Cliente: $nomeCliente \nSaldo: $saldo \n";
  }
}
