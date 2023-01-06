"use strict";
(() => {
    //Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):
    //Tipos de argumentos
    //las funciones pueden manejar tanto tipos de parámetros obligatorios (Los especificados en la declaración de la función)
    //luego están los parámetros opcionales que estos siempre deben de ir al final de los parámetros, es decir, después de los parámetros obligatorios, esto es regla en las últimas versiones de TS y por último,
    //los parametros por defecto que se escriben como en JS, que sería myName: string = “Anto”, en caso que no envíe nada, la variable myName será “Anto”.
    function createProductJson(title, createdAt, // se indica que es de tipo Date en alusión al objeto Date propio de JavaScript
    stock, //Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
    size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const producto1 = createProductJson('P1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);
    console.log(producto1.size);
    //Nota: cuando definamos argumentos opcionales en una función,
    //estas deben ubicarse al final, si no TypeScript nos indicará un **error,
    //ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
    //Al no enviar ese parámetro en cuando usamos la función por defecto este será undefined.
    function createProductJson1(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const producto2 = createProductJson1('P1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
})();
