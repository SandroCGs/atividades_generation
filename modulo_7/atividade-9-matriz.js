/*
    Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, 
    mostre na tela: 
    todos os elementos da Diagonal Principal 
    todos os elementos da Diagonal Secundária 
    A Soma de todos os elementos da Diagonal Principal 
    A Soma de todos os elementos da Diagonal Secundária
*/

let matriz = [];
let contador = 1;
let diagonalPrincipal = "";
let diagonalSecundaria = "";
let somaPrincipal = 0;
let somaSecundaria = 0;

for(let i = 0; i < 3; i++){
    matriz[i] = [];
    for (let j = 0; j < 3; j++){
        matriz[i][j] = contador;
        contador++;
    }
}
//console.log(matriz); //visualizar a matriz
//todos os elementos da Diagonal Principal 
for (let i = 0; i < matriz.length; i++){
    diagonalPrincipal = diagonalPrincipal + matriz[i][i] + " ";
    somaPrincipal = somaPrincipal + matriz[i][i];
}
console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);

//todos os elementos da Diagonal Secundária 
let auxiliar = matriz.length - 1;
for (let i = 0; i < matriz.length; i++){
    diagonalSecundaria = diagonalSecundaria + matriz[i][auxiliar] + " ";
    somaSecundaria = somaSecundaria + matriz[i][auxiliar];
    auxiliar--;
}
console.log(`Elementos da Diagonal Secundária: ${diagonalSecundaria}`);

//A Soma de todos os elementos da Diagonal Principal 
console.log(`Soma dos Elementos da Diagonal Principal: ${somaPrincipal}`);

//A Soma de todos os elementos da Diagonal Principal 
console.log(`Soma dos Elementos da Diagonal Principal: ${somaSecundaria}`);



