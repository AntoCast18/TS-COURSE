(()=> {
    //forma inferida o implicita
    let isEnable = true;
    isEnable = false;

    //forma explicita
    let isNew: boolean = false;
    console.log('isNew',isNew);//imprimir
    isNew= true;
    console.log('isNew',isNew);//vemos como cambia

    const random = Math.random(); //numeros entre 0 y 1 con decimales
    console.log('random',random);

    isNew = random >= 0.5 ? true : false;//analisis de codigo estatito funciona cuano se ejecuta una condicional tambien
    console.log('isNew',isNew);





})();
