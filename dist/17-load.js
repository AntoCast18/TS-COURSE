"use strict";
////## Usando librerías que NO soportan TypeScript
//En el ejemplo vamos a usar lodash que es una librería que nos agrega funcionalidades a nuestro javascript.
//Lo instalamos con `npm install lodash`. Cuando TypeScript no soporta la librería, VSC nos puede ofrecer un paquete
//para instalar con los tipos de esa librería `npm i --save-dev @types/lodash`. Podemos ver cuales son las librerías soportadas
//de forma manual en el perfil de **[NPM de TypeScript](https://www.npmjs.com/~types)**
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//El ecosistema de TypeScript ha creado unos módulos para agregar manualmente el tipado a las librerías que no tienen soporte de tipos.
//por ejemplo, si quieres trabajar con la librería lodash, en Visual Studio Code se te indicará que instales un sistema de tipos para que
//puedas desarrollar sin problemas desde TypeScript://
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        username: 'Franco',
        role: 'admin'
    },
    {
        username: 'Valentina',
        role: 'seller'
    },
    {
        username: 'Santiago',
        role: 'customer'
    },
    {
        username: 'zulema',
        role: 'seller'
    }
];
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
