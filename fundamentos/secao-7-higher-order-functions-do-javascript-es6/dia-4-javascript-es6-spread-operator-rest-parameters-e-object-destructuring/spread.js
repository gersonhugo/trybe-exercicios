// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Goiaba', 'Figo', 'Kiwi'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));