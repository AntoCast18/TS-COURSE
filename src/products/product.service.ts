//archivo que trata algunos datos
//funciones exportadas - array importados -
import { Product } from "./product.model";

export const products: Product[] = [];
export const addProduct = (data: Product): void => {
  products.push(data);
};
export const calcStock = ():number => {
  let total = 0;
  products.forEach(product => total += product.stock)
  return total;
}
