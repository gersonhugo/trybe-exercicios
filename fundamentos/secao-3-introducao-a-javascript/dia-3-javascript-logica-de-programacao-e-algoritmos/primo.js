let numero = 13;
let p = true;
for (let index = numero-1; index > 1; index--) {
    if (numero % index == 0) {
        p = false;
    }
}
if (p) {
    console.log('é primo')
} else {
    console.log('não é primo');
}