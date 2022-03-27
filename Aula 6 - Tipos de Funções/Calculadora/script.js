//Criando uma calculadora
/*
Para este exercício vamos utilizar alguns métodos nativos do JavaScript:

.Number() - para converter valores em números;
.Prompt() - para registrar entradas de usuário;
.Alert() - para mostrar mensagem ao usuário;
.Template Strings - para usar strings junto com expressões;
*/

function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - DivisãoReal (/)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)'
    )
  );

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    if (!n1 || !n2) {
      alert('Erro - parâmetros inválidos!');
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre $(n1) e $n2) é ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt(
          'Deseja fazer outra operação?\n(1) - Sim\n(2) - Não'
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Abayo.');
        } else {
          alert('Digite uma opção válida!');
          novaOperacao();
        }
      }

      switch (operacao) {
        case 1:
          soma();
          break;
        case 2:
          subtracao();
          break;
        case 3:
          multiplicacao();
          break;
        case 4:
          divisaoReal();
          break;
        case 5:
          divisaoInteira();
          break;
        case 6:
          potenciacao();
          break;
      }
    }
  }
}

calculadora();
