import { Queue } from '../Fila/Queue';
import rl from "readline-sync";

const fila = new Queue<string>();
let continua: boolean = true;



while (continua){

    console.log("**************************************************\n")
    console.log("            1 - Adicionar Cliente a Fila            ");
    console.log("            2 - Listar todos os Clientes            ");
    console.log("            3 - Retirar Cliente da Fila             ");
    console.log("            0 - Sair                                ");
    console.log("\n**************************************************")

    let opcao: number = rl.questionInt("Entre com a opção desejada: ");

    switch (opcao) {
        case 1:
            fila.enqueue(rl.question("\nDigite o nome: "));
            console.log("\nFila:");
            fila.printQueue();
            console.log("\nCliente adicionado");
            break;
        
        case 2:
            console.log("\nLista de Clientes na Fila:");
            fila.printQueue();
            break;
        
        case 3:
            if(!fila.isEmpty()){
                console.log("\nFila:");
                fila.dequeue();
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!");
            }
            else{
                console.log("\nA Fila está vazia!")
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