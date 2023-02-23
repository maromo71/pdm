void main(List<String> args) {
  var alunos = [
    {'nome': 'Alfredo', 'nota': 10},
    {'nome': 'Maria', 'nota': 5}
  ];
  String Function(Map) pegarNome = (al) => al['nome'];
  int Function(String) letras = (t) => t.length;

  var nomes = alunos.map((pegarNome));
  var total = nomes.map(letras);

  print(nomes);
  print(total);
}
