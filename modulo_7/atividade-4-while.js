/*
Idade (Número inteiro)
Identidade de Gênero (Número Inteiro): 
Pessoa Desenvolvedora (Número Inteiro):
*/

let leitorGen = 0;
let leitorFun = 0;
let idade = 0;
//let identidadeGen = [0, 0, 0, 0, 0, 0]; //guarda os valores de todas as possibilidades ainda que elas não sejam usadas nessa pesquisa atual
//let funcaoDev = [0, 0, 0, 0]; //guarda os valores de todas as possibilidades ainda que elas não sejam usadas nessa pesquisa atual
let condicao = "s";
let contadores = [0, 0, 0, 0, 0];
let somaIdade = 0;

import readline from 'readline-sync';

while(condicao == "s" || condicao == "sim"){
    idade = readline.questionInt("\nDigite a idade da pessoa desenvolvedora: ");
    console.log("___________\n1 – Mulher Cis\n2 – Homem Cis\n3 – Não Binário\n4 – Mulher Trans\n5 – Homem Trans\n6 – Outros");
    leitorGen = readline.questionInt("Digite a identidade de genero: ");
    /* salvando os valores de todos os dados de genero
    switch(leitorGen){
        case 1:
            identidadeGen[0]++; //mulher cis
            break;
        case 2:
            identidadeGen[1]++; //homem cis
            break;
        case 3:
            identidadeGen[2]++; //não binario
            break;
        case 4:
            identidadeGen[3]++; //mulher trans
            break;
        case 5:
            identidadeGen[4]++; //homem trans
            break;
        case 6:
            identidadeGen[5]++; //outros
            break;
    } */
    console.log("___________\n1 – Backend\n2 – Frontend\n3 – Mobile\n4 – FullStack");
    leitorFun = readline.questionInt("Digite funcao de desenvolvimento: ");
    /* salvando todos os dados de funçao
    switch(leitorFun){
        case 1:
            funcaoDev[0]++; //backend
            break;
        case 2:
            funcaoDev[1]++; //frontend
            break;
        case 3:
            funcaoDev[2]++; //mobile
            break;
        case 4:
            funcaoDev[3]++; //fullstack
            break;
    }
    */

    //O número de pessoas desenvolvedoras Backend
    if(leitorFun == 1)
        contadores[0]++;

    //O número de Mulheres Cis e Trans desenvolvedoras Frontend
    if((leitorGen == 1 || leitorGen == 4) && leitorFun == 2)
        contadores[1]++;

    //O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
    if((leitorGen == 2 || leitorGen == 5) && leitorFun == 3 && idade > 40 )
        contadores[2]++;
    
    //O número de Não Binários desenvolvedores FullStack menores de 30 anos
    if(leitorGen == 3 && leitorFun == 4 && idade < 30)
        contadores[3]++;
    

    //O número total de pessoas que responderam à pesquisa
    contadores[4]++;

    //A média de idade das pessoas que responderam à pesquisa
    somaIdade += idade;
    

    condicao = readline.question("Deseja incluir nova pessoa colaboradora? [s/n]: ").toLocaleLowerCase();
    console.clear();
}

//O número de pessoas desenvolvedoras Backend
//O número de Mulheres Cis e Trans desenvolvedoras Frontend
//O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
//O número de Não Binários desenvolvedores FullStack menores de 30 anos
//O número total de pessoas que responderam à pesquisa
//A média de idade das pessoas que responderam à pesquisa

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${contadores[0]}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend ${contadores[1]}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${contadores[2]}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${contadores[3]}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${contadores[4]}`);
console.log(`A média de idade das pessoas que responderam à pesquisa:  (${(somaIdade / contadores[4]).toFixed(2)})`);


