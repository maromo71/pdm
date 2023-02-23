void main(List<String> args) {
  var notas = [5, 7, 8, 3, 4.6, 10, 9, 8];
  var notasBoas = [];

  for (var n in notas) {
    if (n >= 5) notasBoas.add(n);
  }
  print(notas);
  print(notasBoas);
}
