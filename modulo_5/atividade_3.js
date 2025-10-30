/*Elabore um algoritmo em JavaScript , que leia o Salário Bruto, 
o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, 
exiba na tela o Salário Líquido. Veja o exemplo abaixo */
import readline from 'readline-sync';

let salarioBruto = 0;
let adicionalNoturno = 0;
let horasExtras = 0;
let descontos = 0;
let salarioLiquido = 0;

salarioBruto = readline.questionFloat("\nDigite o salario bruto: ");
adicionalNoturno = readline.questionFloat("Digite o adicional noturno: ");
horasExtras = readline.questionFloat("Digite as horas extras: ");
descontos = readline.questionFloat("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salario Líquido: ${salarioLiquido.toFixed(2)}`);
