"use strict";
(() => {
    let userID;
    let shirtSize; //para un conjunto pequeño de valores y nos indique un error creando nuestro propio tipo
    function greeting(userID, sizesz) {
        if (typeof userID === 'string') { //de acuerdo al if q entre activa el tipado espeacial de esa variable
            console.log(`string ${userID.toLowerCase()}`); //tipado seguro
        }
    }
    greeting(1, 'M');
})();
