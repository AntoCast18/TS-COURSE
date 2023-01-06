//archivo que tiene modelado de los datos
//export palabra clave que significa que puede ser exportado en otro archivo

export type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: ShirtSizes;
};
