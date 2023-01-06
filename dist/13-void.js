"use strict";
(() => {
    const calTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    };
    const rta = calTotal([1, 2, 2, 4, 5, 6]);
    console.log(rta);
    //funcion sin retorno, es decir q no retornan nada son void.
    const prinTotal = (prices) => {
        const rta = calTotal(prices);
        console.log(`El total es ${rta}`);
    };
    prinTotal([1, 2, 1, 1, 1]);
})();
