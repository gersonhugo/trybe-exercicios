import './style.css';

const button = document.querySelector('button');
const imagem = document.querySelector('img');
const nome = document.querySelector('h4');

button.addEventListener('click', () => {
    const id = 1 + Math.round(Math.random() * 730);
    const link = fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            imagem.src = data.images.md;
            nome.innerHTML = data.name;
        })
        .catch((error) => alert('Ocorreu um erro ao sortear o personagem. Tente novamente'));
});