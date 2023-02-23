void main(List<String> args) {
  // print(juntar(10, 30));
  // print(juntar("Maria", 30));
  // print(juntar("Maria ", "Neves"));
  print(imprimirData(10, 5));
}

dynamic juntar(dynamic x, dynamic y) {
  return x.toString() + y.toString();
}

dynamic imprimirData(int dia, [int mes = 2, int ano = 23]) {
  return dia.toString() + "/" + mes.toString() + "/" + ano.toString();
}
