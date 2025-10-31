/*
Escreva um algoritmo que leia 3 palavras (string), que definem 
as características de um tipo de animal, segundo o diagrama abaixo, 
que deve ser lido da esquerda para a direita.
*/
import readline from 'readline-sync';

let tipo; //vertebrado ou invertebrado
let classe; //ave, mamifero, inseto, anelídeo
let alimentacao; //carnívoro, onívoro, herbívoro, hematófago

tipo = readline.question("Digite o tipo (vertebrado ou invertebrado) : ");
classe = readline.question("Digite a classe (ave, mamifero, inseto, anelideo): ");
alimentacao = readline.question("Digite o tipo de alimentacao (carnivoro, onivoro, herbivoro, hematofago): ");

if (tipo == "vertebrado"){
    if(classe == "ave"){
        if(alimentacao == "carnivoro"){
            console.log("Águia");
        } else if (alimentacao == "onivoro"){
            console.log("Pomba");
        }
    } else if (classe == "mamifero"){
        if(alimentacao == "onivoro"){
            console.log("Homem");
        } else if (alimentacao == "herbivoro"){
            console.log("Vaca");
        }
    }
} else if (tipo == "invertebrado"){
    if(classe == "inseto"){
        if(alimentacao == "hematofago"){
            console.log("Pulga");
        } else if (alimentacao == "herbivoro"){
            console.log("Lagarta");
        }
    } else if (classe == "anelideo"){
        if(alimetacao == "hematofago"){
            console.log("Sanguessuga");
        } else if(alimentacao == "onivoro"){
            console.log("Minhoca");
        }
    }
}