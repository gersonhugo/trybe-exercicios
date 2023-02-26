const {encode, decode} = require('./exercicio3');

describe('Testes da função encode', () => {
    test('verifica se encode é uma função', () => {
        expect(typeof encode).toBe('function');
    });
    test('verifica se as vogais aeiou são convertidas em 12345, respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    test('verifica se as demais letras/números não são convertidos', () => {
        expect(encode('bcdef')).toBe('bcd2f');
    }); 
    test('testa se a string retornada tem o mesmo número de caracteres que a string passada ', () => {
        expect(encode('aeiou').length).toBe('12345'.length);
    });
});

describe('Testes da função decode', () => {
    test('verifica se decode é uma função', () => {
        expect(typeof decode).toBe('function');
    });
    test('verifica se os números 12345 são convertidos em aeiou, respectivamente;', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    test('verifica se as demais letras/números não são convertidos', () => {
        expect(decode('56789')).toBe('u6789');
    }); 
    test('testa se a string retornada tem o mesmo número de caracteres que a string passada ', () => {
        expect(decode('12345').length).toBe('aeiou'.length);
    });
});
