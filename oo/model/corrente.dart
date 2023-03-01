import 'conta.dart';

class Corrente extends Conta {
  double? limite;

  Corrente(super.numConta, super.nomeCliente, this.limite) {}

  @override
  void sacar(double valor) {
    if (valor <= (limite! + saldo)) {
      saldo -= valor;
    }
  }

  @override
  String toString() {
    var texto = super.toString();
    texto += "Limite: $limite\n";
    return texto;
  }
}
