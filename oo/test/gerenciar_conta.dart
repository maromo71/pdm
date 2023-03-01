import '../model/corrente.dart';
import '../model/poupanca.dart';

void main() {
  var conta1 = new Corrente(11, "José", 2000.0);
  var conta2 = new Poupanca(12, "Maria", 12);
  conta1.depositar(3000.0);
  conta1.sacar(10000.0);
  print(conta1);
  //Note que o saque não foi feito.
  //o correto é disparar um exceção para este caso
  conta2.depositar(1500.0);
  conta2.sacar(700.0);
  print(conta2);
}
