let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';
for (let index = 0; index < array.length; index++) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}
console.log(maior);

let menor = maior;
for (let index = 0; index < array.length; index++) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}
console.log(menor);