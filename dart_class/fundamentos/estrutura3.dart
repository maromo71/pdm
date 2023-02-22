import 'dart:io';

void main(List<String> args) {
  var acumulo = 0;
  while (acumulo < 100) {
    print('Digite um valor inteiro: ');
    var num = int.parse(stdin.readLineSync()!);
    acumulo += num;
  }
  print("Valor final acumulado: $acumulo");
  for (var i = 1; i <= 100; i++) {
    print(i);
  }
}
