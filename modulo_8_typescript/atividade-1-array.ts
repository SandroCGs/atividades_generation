/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e 
deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/
import * as readlinesync from "readline-sync";

const cores: Array<string> = new Array<string>();

for(let i = 0; i < 5; i++){
    let entrada = readlinesync.question("Digite o nome de uma cor: ");
    cores.push(entrada);
}

console.log("\nListar todas as cores: ");
for (let cor of cores){
    console.log(cor);
}

cores.sort(); //ordena as cores
console.log("\nOrdenar as cores: ");
for (let cor of cores){
    console.log(cor);
}
