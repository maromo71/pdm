import 'dart:io';

void main(List<String> args) {
  var opc;
  print("Digite sua opção: [1. Reais, 2. Dólares, 3. Libras]");
  opc = int.parse(stdin.readLineSync()!);
  switch (opc) {
    case 1:
      print("Sua opção foi Reais");
      break;
    case 2:
      print("Sua opção foi Dólares ");
      break;
    case 3:
      print("Sua opção foi libras");
      break;
  }
}
