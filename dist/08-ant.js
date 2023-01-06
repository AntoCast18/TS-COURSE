"use strict";
(() => {
    let myDinamicVar; //"eny" como que cualquier cosa puede ir ahi
    myDinamicVar = null;
    myDinamicVar = 100;
    myDinamicVar = true;
    myDinamicVar = {};
    myDinamicVar = ''; //hay otras formas para que una variable cambie de valor
    // entonces vemos donde vamos a utilizar el any. se aconseja que no sea utilizado y que sea estricto
    //utilizar el tipo de dato, pero existe porq puede ser una solucion para los primeros pasos de migracion
    myDinamicVar = 'Hello';
    const rta = myDinamicVar.toLowerCase(); //forzando que se lo trate como string
    console.log(rta);
    myDinamicVar = 123;
    const rta2 = myDinamicVar.toFixed(); //forzando que se lo trate como number
    console.log(rta2);
})();
