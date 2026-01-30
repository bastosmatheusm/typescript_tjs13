/*
4) Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
Entrada: 2 5 1 3 4 9 7 8 10 6
Digite o número que você deseja encontrar: 7
O número 7 foi encontrado!

Entrada: 2 5 1 3 4 9 7 8 10 6
Digite o número que você deseja encontrar: 40
O número 40 não foi encontrado!

* Lembre-se que a Collection Set não aceita valores repetidos.

Na construção do Algoritmo, utilize os seguintes conteúdos:
Entrada e Saída de dados
Laços Condicionais
Laços de Repetição
Collection Set

*/
import rl = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let buscadorNumero: number = rl.questionInt("Digite o número que você deseja encontrar: ");

if (numeros.has(buscadorNumero)) {
    console.log(`O número ${buscadorNumero} foi encontrado!`);
}
else {
    console.log(`O número ${buscadorNumero} não foi encontrado!`);
}
