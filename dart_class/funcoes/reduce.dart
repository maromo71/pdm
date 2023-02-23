void main(List<String> args) {
  var notas = [8.8, 8.0, 9.0, 10.0, 4.0];

  var somaNotas = notas.reduce(somar);

  print(somaNotas);
}

double somar(double x, double y) {
  return x + y;
}
