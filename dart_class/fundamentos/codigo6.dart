import 'dart:io';

void main(List<String> args) {
  print('Escreva algo e de enter: ');
  var input = stdin.readLineSync()!;

  print(input);
  print(input.runtimeType);
  print(input.toUpperCase());
}
