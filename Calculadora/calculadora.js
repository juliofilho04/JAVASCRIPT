function calculadora() {
    const operacao = Number(prompt("Escolha uma operação: \n1 - adição (+)\n2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão (/)\n5 - resto (%)\n6 - potência (**)"));

    if (!operacao || operacao >= 7) {
        alert(`Operação inválida. Digite novamente`)
        calculadora();
    }
    else {
        let n1 = Number(prompt("Digite o primeiro número: "));
        let n2 = Number(prompt("Digite o segundo número: "));
        let resultado;

        if (!n1 || !n2) {
            alert(`Parâmetros inválidos. Digite novamente`)
            calculadora();
        }
        else {
            function adicao() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function resto() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
                novaOperacao();
            }
            function potencia() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª potência é igual a ${resultado}`)
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja realizar outra operação?\n1 - sim\n2 - não")

                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert(`Obrigado por usar minha calculadora!`)
                }
                else {
                    alert(`Digite uma opção válida!`)
                    novaOperacao();
                }
            }
        }

        if (operacao == 1) {
            adicao();
        }
        else if (operacao == 2) {
            subtracao();
        }
        else if (operacao == 3) {
            multiplicacao();
        }
        else if (operacao == 4) {
            divisao();
        }
        else if (operacao == 5) {
            resto();
        }
        else if (operacao == 6) {
            potencia();
        }
    }
}
calculadora();