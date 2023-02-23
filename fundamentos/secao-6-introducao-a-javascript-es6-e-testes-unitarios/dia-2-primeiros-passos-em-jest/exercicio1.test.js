const myRemove = require('./exercicio1');

test('verifica se o elemento "item" está sendo removido do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
