"use strict";
(() => {
    //## Objetos como tipos
    //luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Remera fachera facherita',
        createdAt: new Date(),
        stock: 10,
        size: 'M',
    });
    addProduct({
        title: 'Gorra',
        createdAt: new Date(),
        stock: 15
    });
    console.log(products);
})();
