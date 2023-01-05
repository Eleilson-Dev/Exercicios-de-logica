const n1 = document.querySelector('.number1');
const h1 = document.querySelector('.h1')
const bnt = document.querySelector('#bnt');

bnt.addEventListener('click', () => {
    const result = Number(n1.value);
    h1.innerHTML = `Analisando o valor ${result}, seu antecessor é ${result - 1} e seu sucessor é ${result + 1}`;
})