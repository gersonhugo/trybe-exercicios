const myFizzBuzz = require('./exercicio2');

test('verifica se o número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('verifica se o número é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
});

test('verifica se o número é divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
});

test('verifica se o número não é divisível por 3 e 5', () => {
    expect(myFizzBuzz(14)).toBe(14);
});

test('verifica se o parametro que não é um número retorna false', () => {
    expect(myFizzBuzz('string')).toBe(false);
});
