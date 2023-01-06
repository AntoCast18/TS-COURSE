(()=>{
    type UserId = string | number | boolean; //en TS para crear nuestro propio tipo y tengo 3 aqui
    let userID:UserId
    //para darle dinamismo asegurando coherencia lo usamos con unaa funcion de js
    //function greeting(userID: UserId){ //cuando sea string quiero una acciony cuando sea number quiero otra accion
       // if(typeof userID === 'string'){//de acuerdo al if q entre activa el tipado espeacial de esa variable
        //    console.log(`string ${userID.toLowerCase()}`);//tipado seguro
       // }
    //}

    //Literal types
    //let shirtSize: string;
    //shirtSize = 'M';
    //shirtSize = 'S';
    //shirtSize = 'XXL';

    type Sizes = 'S' | 'M' | 'XXL';
    let shirtSize: Sizes;  //para un conjunto pequeño de valores y nos indique un error creando nuestro propio tipo
    function greeting(userID: UserId, sizesz: Sizes){ //cuando sea string quiero una acciony cuando sea number quiero otra accion
        if(typeof userID === 'string'){//de acuerdo al if q entre activa el tipado espeacial de esa variable
            console.log(`string ${userID.toLowerCase()}`);//tipado seguro
        }
    }
    greeting(1, 'M');
})();
