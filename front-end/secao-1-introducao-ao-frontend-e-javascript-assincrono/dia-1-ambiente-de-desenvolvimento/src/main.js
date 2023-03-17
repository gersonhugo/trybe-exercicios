import validator from 'validator';

const valor = document.getElementById('valor');
const tipo = document.getElementById('tipo');
const status = document.querySelector('h4');

const btnValidar = document.querySelector('button');

const msg = 'A validação retornou ';

btnValidar.addEventListener('click', (event) => {
    event.preventDefault();
    if (tipo.value === 'email') {
        status.innerHTML = msg + validator.isEmail(valor.value);
    }
    if (tipo.value === 'ip') {
        status.innerHTML = msg + validator.isIP(valor.value);
    }
    if (tipo.value === 'url') {
        status.innerHTML = msg + validator.isURL(valor.value);
    }
    if (tipo.value === 'boolean') {
        status.innerHTML = msg + validator.isBoolean(valor.value);
    }
    if (tipo.value === 'strongpass') {
        status.innerHTML = msg + validator.isStrongPassword(valor.value);
    }
});
