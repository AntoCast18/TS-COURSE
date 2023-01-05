"use strict";
(() => {
    let nombre; //declarar una variable y no asignarle un valor, agregar el tipo de dato
    let productPrice = 100; //forma inferida de declarar el tipo
    productPrice = 12;
    console.log('productPrice', productPrice);
    let customerAge = 28; //sin usar el motor de inferencia, se declara el tipo, forma explicita
    customerAge = customerAge + 1; //29 (?)
    console.log('customerAge', customerAge);
    let productInStock; //null, no esta inicializado y m marca una alerta al usar console.log e if
    console.log('productInStock', productInStock);
    if (productInStock > 10) {
        console.log('is greater');
    }
    let discount = parseInt('123'); //tranforar a numero lo que viene como string
    console.log('discount', discount);
    if (discount > 200) {
        console.log('apply');
    }
    else {
        console.log('not apply');
    }
    let hex = 0xfff;
    console.log('hex', hex); //lo pasa a decimal
    let bin = 0b10101;
    console.log('bin', bin); //lo pasa a decimal
})(); //scope para no tener  problemas con el nombre de variables
//luuego despertar el watch  para ejecutar los archcivos "npx tsc --watch" (cmd)
//luego "node dist/04-numbers.js" (termial vscode)
//productPrice 12
//customerAge 29
//productInStock undefined
//discount 123
//not apply
