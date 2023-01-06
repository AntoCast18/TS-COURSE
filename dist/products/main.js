"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ## Módulos: import y export
//Como buena práctica, a los archivos para modelado de datos debemos llamarlos de la siguiente forma: `nombre.model.ts`
//y a los archivos que van a tratar dichos datos de la siguiente manera: `nombre.service.ts`
//archivo que ejecuta todo, utilizando el servicio
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'Remera fachera facherita',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
});
(0, product_service_1.addProduct)({
    title: 'Gorra',
    createdAt: new Date(),
    stock: 15
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
