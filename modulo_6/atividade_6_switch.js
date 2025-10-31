/*
Com base na tabela abaixo, escreva um algoritmo que leia 
o Nome do Colaborador (string), o Código do Cargo do 
Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo 
Salário reajustado.
*/

import readline from 'readline-sync';

let nomeColab = readline.question("Digite o nome: ");
let codigo;
do{
    codigo = readline.questionInt("Digite o codigo: ");
    if (codigo < 0 || codigo > 6){
        console.log("valor inválido")
    }
} while(codigo < 0 || codigo > 6)
let salario = readline.questionFloat("Digite o salario: ");
console.log(""); //pular linha para a resposta
switch(codigo){
    case 1:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Gerente");
        console.log("Salario: " + (salario + (salario * 0.10)).toFixed(2));
        break;
    case 2:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Vendedor");
        console.log("Salario: " + (salario + (salario * 0.07)).toFixed(2));
        break;
    case 3:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Supervisor");
        console.log("Salario: " + (salario + (salario * 0.09)).toFixed(2));
        break;
    case 4:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Motorista");
        console.log("Salario: " + (salario + (salario * 0.06)).toFixed(2));
        break;
    case 5:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Estoquista");
        console.log("Salario: " + (salario + (salario * 0.05)).toFixed(2));
        break;
    case 6:
        console.log("Nome do colaborador: " + nomeColab);
        console.log("Cargo: Técnico de TI");
        console.log("Salario: " + (salario + (salario * 0.08)).toFixed(2));
        break;
}
    


