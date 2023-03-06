const numbers = [50, 85, -30, 3, 15];

const maiorValor = numbers.reduce((maior, numero) => maior > numero ? maior : numero, 0); 

console.log(maiorValor);