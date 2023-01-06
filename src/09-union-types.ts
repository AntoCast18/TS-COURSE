(()=>{
    let userId: string | number;//forma explicita
    userId = 1;
    userId = 'anto';

    //para darle dinamismo asegurando coherencia lo usamos con unaa funcion de js
    function greeting(myText:  string | number){ //cuando sea string quiero una acciony cuando sea number quiero otra accion
        if(typeof myText === 'string'){//de acuerdo al if q entre activa el tipado espeacial de esa variable
            console.log(`string ${myText.toLowerCase()}`);//tipado seguro
        }else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting(1);
    greeting('anto');
})();
