const squarespace = require('./squarespace');

test('can retreive products', async () => {
    try {
        let products = await squarespace.retrieveAllProducts();
        console.log(products);
    } catch(e) {
        console.error(e);
    }
});