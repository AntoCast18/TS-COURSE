//## Usando librerías que soportan TypeScript
//Para el ejemplo se usa la librería date-fns que la vamos a instalar con `npm install date-fns —save`
//Las librerías que tienen soporte para TypeScript nos facilitan su uso, y más aún si usas editores de código que se integran bien con este “lenguaje”, pues brindan información muy útil como indicar:

//La cantidad de parámetros esperados por una función
//El tipo de datos de los parámetros y variables
//El tipo de dato que retornará la función
//Autocompletado al usar métodos de un módulo
//Mejores prácticas
import { format, subDays } from "./date-fns";

const date = new Date(1998,1,28)// en TS 0=enero 1=febrero ...
const rta = subDays(date,30)
const str = format(rta, 'yyyy/MM/dd')

console.log(str) //1998/01/29

