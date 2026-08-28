## Principais pontos da estrutura para a aula:

* **Visor (#display):** Campo input em modo readonly, com tipografia monoespaçada (font-monospace) e alinhamento à direita.

* **Identificação no JS via ```dataset``` / ```IDs:```**
    * **Números e Ponto:** Utilizam o atributo ```data-num="0"``` até ```data-num="9"``` e ```data-num="."``` (facilita selecionar tudo via document.querySelectorAll('[data-num]') ou via delegação de eventos).

    * **Operações:** Utilizam ```data-op="+"```, ```data-op="-"```, ```data-op="*"```, ```data-op="/"```.

    * **Ações Especiais:** ```#btnClear``` (limpar tudo), ```#btnBackspace``` (apagar último dígito) e ```#btnEquals``` (calcular).

* **Importação:** Já aponta para o ```<script src="script.js"></script>``` no final do corpo da página.