/*
1) Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/
import rl = require("readline-sync");

const cores: Array<string> = new Array<string>(rl.questionInt("Digite a qtd desejada de cores: "));
// 5 cores

for (let i = 0; i < cores.length; i++) {
    cores[i] = rl.question("Digite a cor: ");
    
}

console.log("\nListar todas as cores:")
for (const cor of cores) {
    console.log(cor);
}

cores.sort();
console.log("\nOrdenar as cores:")
for (const cor of cores) {
    console.log(cor);
}