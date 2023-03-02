//A função hasName é responsável por verificar se o nome da pessoa está ou não na lista.
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((nome) => nome === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));
