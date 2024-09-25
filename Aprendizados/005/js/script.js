//  São os sinais que usamos: + - * / = ++ -- += -= && || etc...

// Operadores Aritméticos (matemáticos)

var valor1, valor2, total1;
valor1 = 5;
valor2 = 2;
total1 = valor1 + valor2; // Ou: - * / 
alert(total1);

var valor3, valor4, total2;
valor3 = 5;
valor4 = 2;
total2 = ++valor3 // ++ para adicionar mais 1, ou -- para diminuir 1, ou * ou /
alert('O valor3 que é igual a 5 ficou ' + total2);

// Operadores de Atribuição

var valor5, valor6, total3;
valor5 += valor6; // É a mesma coisa que valor5 = valor5 + valor6. Podemos usar também o -=, *=, /=

// Operadores de Sequencia

var nome1, nome2, nomeCompleto; 
nome1 = "Filipe "
nome2 = "Tartaglia"
nomeCompleto = nome1 + nome2;
alert(nomeCompleto);

// Operadores de Comparação

var valor7, valor8, total4;
valor7 = 8;
valor8 = 10;
total4 = (valor7 == valor8); // Este sinal é usado como o igual. True (verdadeiro) ou False (Falso). Usamos também o === para verificar se o valor é o mesmo e se o tipo do valor é o mesmo. Usamos o != para verificar se o valor é DIFERENTE do outro valor. E o !== para verificar se é diferente o valor e o tipo. O sinal de menor < e o de maior >, para verificar se é maior ou não. E o <= e >= para maior igual ou menor igual.
alert(total4);

// Operador Condicional (Ternário)

var idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor"
alert('A resposta é ' + eleitor);

// Operadores Lógicos

var idade2, eleitor2;
idade = 19;
eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor";

resultado = (idade > 60 && idade < 70); // Podemos usar também o || que é o OU, 
alert(resultado);