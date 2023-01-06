const myArray = [15, 46, 75, 34, 23];

const numeroReduzido = myArray.reduce((acc, item) => acc + item, 0);
console.log(numeroReduzido)