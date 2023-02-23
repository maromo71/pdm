void main(List<String> args) {
  var notas = [5, 7, 8, 3, 4.6, 10, 9, 8];
  var nomes = ["Maria", "Ze", "Oscar"];
  var notasBoas = notas.where((nota) => nota >= 5);
  print(notas);
  print(notasBoas);
  print(centroDaLista(notas));
  print(centroDaLista(nomes));
}

E? centroDaLista<E>(List<E> lista) {
  return lista.length > 0 ? lista[lista.length ~/ 2] : null;
}
