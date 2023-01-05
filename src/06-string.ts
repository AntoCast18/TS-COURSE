(()=>{
    let productTitle = 'My amazing product';//tipo string con el motor de inferencia
    productTitle = 'My amazing product changed';
    console.log('productTitle',productTitle );

    const productDesription = "I'm Antonella"; //comillas dobles es lo mismo pero se usa mas para poder usar las simples
    console.log('productDesription',productDesription );

    let productPrice = 100;
    let isNew = true;
    const summary = `
    title: ${productTitle}
    description:${productDesription}
    price: ${productPrice}
    isNew: ${isNew}
    `;//beneficio para manejar variables y concatenerlas y poder manejar multiples lineas
    console.log(summary);
})();
