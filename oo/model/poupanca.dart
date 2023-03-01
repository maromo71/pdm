import 'conta.dart';

class Poupanca extends Conta {
  int diaAniversario;

  Poupanca(super.numConta, super.nomeCliente, this.diaAniversario) {}
}
