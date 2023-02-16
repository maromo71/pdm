import 'dart:io';

void main(List<String> args) {
  const PI = 3.1415;
  print('Digite o valor do raio: ');
  var input = stdin.readLineSync()!;
  double raio = double.parse(input);
  var area = PI * (raio * raio);
  print("O valor da area do círculo é: " + area.toStringAsFixed(2));
}
