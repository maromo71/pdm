void main(List<String> args) {
  var palavra = "Abacata";
  print(palavra);
  print(palavra.codeUnits);
  print(palavra.hashCode);
  palavra = "Abacate";
  print(palavra.hashCode);
}
