let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('adiciona um item no início do array')
console.log(tasksList)

tasksList.pop();  // remove a última tarefa
tasksList.shift(); //remove o primeiro item da lista
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião'); // retorna o índice
console.log(indexOfTask);
// 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

menu.push('Contato')
console.log(menu);

