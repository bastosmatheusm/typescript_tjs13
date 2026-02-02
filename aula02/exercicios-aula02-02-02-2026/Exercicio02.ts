import rl from "readline-sync";
import { Stack } from '../Stack/Stack';

const pilha = new Stack<string>();
let continua: boolean = true;



while (continua){

    console.log("\n**************************************************\n")
    console.log("            1 - Adicionar Livro a pilha             ");
    console.log("            2 - Listar todos os Livros              ");
    console.log("            3 - Retirar Livro da pilha              ");
    console.log("            0 - Sair                                ");
    console.log("\n**************************************************");
    
    let opcao: number = rl.questionInt("Entre com a opção desejada: ");

    switch (opcao) {
        case 1:
            pilha.push(rl.question("\nDigite o nome: "));
            console.log("\nPilha:");
            pilha.printStack();
            console.log("\nLivro adicionado!");
            break;
        
        case 2:
            console.log("\nLista de Livros na Pilha:");
            pilha.printStack();
            break;
        
        case 3:
            if(!pilha.isEmpty()){
                console.log("\nPilha:");
                pilha.pop();
                pilha.printStack();
                console.log("\nO Livro foi retirado da pilha!");
            }
            else{
                console.log("\nA Pilha está vazia!\n")
            }
            break;

        case 0:
            continua = false;
            console.log("\n**************Programa Finalizado!****************");
            break;

        default:
            break;
    }
}