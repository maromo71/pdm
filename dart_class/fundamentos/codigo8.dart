void main(List<String> args) {
  var resultado = [3, 7, 12, 45, 46, 60];
  print(resultado.elementAt(1));
  resultado.add(11);
  resultado.removeAt(2);
  print(resultado);
  resultado.forEach((x) {
    print(x);
  });
  print(resultado.reversed);
}
