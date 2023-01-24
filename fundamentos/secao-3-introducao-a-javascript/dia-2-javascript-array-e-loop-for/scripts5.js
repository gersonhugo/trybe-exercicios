let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    soma += numbers[i];
}

console.log('soma = ' + soma);

let media = soma / numbers.length
console.log('média = ' + media);

if (numbers[numbers.length -1] > 20) {
    console.log('valor maior que 20') 
} else {
    console.log('valor menor ou igual a 20')
}

let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
}
console.log(maior)

let impares = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        impares += 1
    } 
}
if (impares == 0) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log('existem ' + impares + ' valores ímpares')
}

let menor = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i]
    }
}
console.log('menor = ' + menor);

let meuArray = [];

for (let i = 1; i < 26; i++) {
    meuArray.push(i);
}
console.log(meuArray);

for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i] / 2);
}