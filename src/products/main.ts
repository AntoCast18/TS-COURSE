    // ## Módulos: import y export
//Como buena práctica, a los archivos para modelado de datos debemos llamarlos de la siguiente forma: `nombre.model.ts`
//y a los archivos que van a tratar dichos datos de la siguiente manera: `nombre.service.ts`
//archivo que ejecuta todo, utilizando el servicio
import { addProduct, calcStock, products } from "./product.service";

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

console.log(products)
const total = calcStock()
console.log(total)
