import Swal from 'sweetalert2';

const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const render = (data) => {
    ul.innerHTML = '';
    const array = Object.entries(data.rates);
    array.forEach(element => {
        const [coin, value] = element;
        console.log(coin, value);
        const li = document.createElement('li');
        li.innerHTML = `${coin} ${value}`;
        ul.append(li);
    });
};

const click = () => {
    const moeda = input.value;
    if (moeda === '') {
        Swal.fire({
            icon: 'error',
            title: 'Ops ...',
            text: 'Você precisa passar uma moeda!',
        });
        return;
    }
    fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
        .then((res) => res.json())
        .then((data) => {
            if (moeda.toUpperCase() !== data.base) {
                throw new Error('Moeda não existente!');
            }
            console.log(data);
            render(data);
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Ops ...',
                text: error.message,
            });
        });
};

button.addEventListener('click', click);

