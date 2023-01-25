const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

soma = 0;
for (let index = 1; index <= 100; index++) {
    soma += index;
    console.log(soma)
}
console.log('soma = ', soma)

vezes = 0
numero = 100
for (let index = 100; index > 0; index-=5) {
    vezes++;
    numero -= 5;
    console.log(vezes, numero)
}
