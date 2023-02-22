import 'dart:io';

void main(List<String> args) {
  print("Digite um valor inteiro: ");
  var num;
  num = int.parse(stdin.readLineSync()!);
  num = num > 0 ? num * num : (num * num) * -1;
  print("Resultado do numero ao quadrado: $num");
}
