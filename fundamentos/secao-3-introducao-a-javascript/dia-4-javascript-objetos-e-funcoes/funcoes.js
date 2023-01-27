let a = 7;
let b = 8;

function adicao(numero1, numero2) {
    return numero1 + numero2;
}
console.log(adicao(a, b));

function subtração(numero1, numero2) {
    return numero1 - numero2;
}
console.log(subtração(a, b));

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicacao(a, b));

function divisao(numero1, numero2) {
    return numero1 / numero2;
}
console.log(divisao(a, b));

function modulo(numero1, numero2) {
    return numero1 % numero2;
}
console.log(modulo(a, b));

console.log();

function maior(num1, num2) {
    if(num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    }
}
console.log(maior(a,b));

console.log();

let c = 6;

function maiorDosTres(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1 + " - o primeiro é maior"
    } else if (num2 > num1 && num2 > num3) {
        return num2 + " - o segundo é maior"
    } else {
        return num3 + " - o terceiro é maior"
    }
}
console.log(maiorDosTres(a, b, c));

console.log();

function positivoOuNegativo(valor) {
    if (valor > 0) {
        return "positive"
    } else if (valor < 0) {
        return "negative"
    } else {
        return "zero"
    }
}
console.log(positivoOuNegativo(0));

console.log();

function verificaTriangulo(x, y, z) {
    if (x < 0 || y < 0 || z < 0) {
        return "erro"
    }
    else if (x + y + z == 180) {
        return true
    } else {
        return false
    }
}
console.log(verificaTriangulo(40, 40, 10));
