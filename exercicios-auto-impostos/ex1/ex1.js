// Exercício 1: Variáveis e Operadores
// Crie um programa que solicite ao usuário dois números e exiba:

// A soma dos dois números.

// A subtração do primeiro pelo segundo.

// A multiplicação dos dois números.

// A divisão do primeiro pelo segundo.

// O resto da divisão do primeiro pelo segundo.

// Dica: Use prompt() para receber os números do usuário e console.log() para exibir os resultados.

// Solicitar os números ao usuário
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verificar se os valores são números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Por favor, insira números válidos.");
} else {
  // Realizar os cálculos
  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero1 / numero2;
  const resto = numero1 % numero2;

  // Exibir os resultados
  console.log(`Soma: ${soma}`);
  console.log(`Subtração: ${subtracao}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Divisão: ${divisao}`);
  console.log(`Resto da divisão: ${resto}`);
}