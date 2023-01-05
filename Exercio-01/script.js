const h1 = document.querySelector('.h1');
const inputNome = document.querySelector('#name');
const bnt = document.querySelector('#bnt');

bnt.addEventListener('click', () => {
    h1.innerHTML = `Olá é um prazer te conhecer ${inputNome.value}`;
    inputNome.value = '';
})