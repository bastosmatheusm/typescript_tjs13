import rl = require("readline-sync");

let num1: number, num2: number

num1 = rl.questionFloat("Digite o primeiro numero: ");
num2 = rl.questionFloat("Digite o segundo numero: ");

console.log(`${num1} + ${num2} = ${num1 + num2}`);