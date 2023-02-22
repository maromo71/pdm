void main(List<String> args) {
  Map<String, double> salarios = {
    "gerente": 17899.34,
    "supervisor": 13875.89,
    "programador": 6877.89
  };
  print(salarios["gerente"]); //salario apenas do gerente
  print(salarios); //todo o dicionário
  if (salarios["gerente"]! > 15000.0) {
    print("Sem bonificação");
  } else {
    print("Bonus de 1000.00");
  }
}
