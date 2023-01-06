"use strict";
(() => {
    //TypeScript
    //funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos
    function imprimirDatos(data) {
        console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`);
    }
    imprimirDatos({
        username: 'antonella',
        email: 'antonella.scastagna.com'
    });
    //En el ejemplo, el nombre data hace referencia al objeto que recibirá la función imprimirDatos.
    //Por ello, para acceder al valor de username lo definimos en el console.log como data.username y para el email como data.email,
    //pues así es como se accede a las propiedades de un objeto.
    //Finalmente, cuando invocamos imprimirDatos y queremos enviar el objeto que nos pide como parámetro,
    //simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como data tal como lo hicimos en la definición de la función
})();
