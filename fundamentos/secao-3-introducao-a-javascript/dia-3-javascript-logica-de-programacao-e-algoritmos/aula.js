// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0
for (let index = 1; index <= 50; index++) {
    soma += index;
}
// console.log("A soma total de 1 a 50 é:", soma);



//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let quantos = 0;
for (let index = 2; index <= 150; index++) {
    if (index % 3 == 0) {
        quantos+= 1;
    }   
}
if (quantos === 50) {
    // console.log("Mensagem secreta");
}



// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 




//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 15;
if (idade >= 18 ? console.log("A pessoa é maior de idade") : console.log(''));



// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let name = ['Carolzita', 'Flavio', 'Noel']
let age = [25, 30, 40]

let menor = age[2];
let indice = 0;
for (let index = 0; index < 3; index++) {
    if (age[index] < menor) {
        menor = age[index];
        indice = index;
        console.log(menor);
    }
}
