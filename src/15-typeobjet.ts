(()=>{
//## Objetos como tipos

//Vamos a refactorizar la función anterior para usar literal types y especificar el tipo de nuestro array.
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
//En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSizes;
};
//luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir
const products: Product[] = [];

const addProduct = (data: Product): void => {
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
