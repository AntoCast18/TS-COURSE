"use strict";
(() => {
    let prices = [1, 3, 554, 7, 9]; //definifo como arreglo de numeros enteros unicamente
    prices.push(345);
    prices.map(item => item * 2); //puedo multiplicar cada elem *2
    console.log(prices);
    let price = [1, true, 554, 'hello', 9]; //definifo como string|boolean|number
    prices.push(345);
    console.log(price);
    let mixed = [true, 'hello']; //definifo como forma explicita que soporte
    mixed.push(345); //estos 3 tipos de datos que no estaban en el array inicial
    mixed.push('red');
    //si definicmo como Objet deja insertar otro array u objetos
    console.log(mixed);
})();
