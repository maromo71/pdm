void main(List<String> args) {
  saudacao(idade: 34, nome: "Tereza");
  saudacao(nome: "Marcos", idade: 30);
}

void saudacao({String? nome, int? idade}) {
  print("Ola $nome sua idade é $idade");
}
