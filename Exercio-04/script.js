const n1 = document.querySelector('.number1');
const h1 = document.querySelector('.h1')
const bnt = document.querySelector('#bnt');

bnt.addEventListener('click', () => {
    const result = Number(n1.value);
    h1.innerHTML = `O dobro de ${result} é ${result * 2} <br>
    O triplo de ${result} é ${result * 3} <br>
    A raiz quadrada de ${result} é ${Math.sqrt(result).toFixed(2)} 
    `;
})