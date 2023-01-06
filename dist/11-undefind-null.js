"use strict";
(() => {
    //let myNumber: number = undefined;
    //let myString: string = null;
    //let myNull = null;  //quedan los dos como tipo any pero se puede forzar
    //let myUndefined = undefined;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null; //puede ser un numero pero lo pueo inicializar como null tambien
    myNumber = 12; //en angular hay componentes que son dinamicos y hasta q no carguen los templet ese valor va a ser null
    let myString = undefined; //puede ser un texto pero lo pueo inicializar como indefinido tambien
    myString = 'anto';
    //lo enfrentamos con una funcion
    function hi(name) {
        let hello = 'hola ';
        if (name) {
            hello += 'name';
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    hi('antonella');
    hi(null);
    //reescribimos la funcion, mas eficiente
    function hiV2(name) {
        let hello = 'hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody'; //con el ? puede verificar si es uno o no y usar la funcion
        console.log(hello);
    }
    hiV2('antonella');
    hiV2(null);
})();
