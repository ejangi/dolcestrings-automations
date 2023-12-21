test('default route can be invoked', async () => {
    await fetch('http://localhost:8080/')
    .then((response) => {
        expect(response.status).toBe(200);
    });
});



test('Function can be invoked', async () => {
    await fetch('http://localhost:8080/price-update', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env.SECRET_KEY
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            current_products_filename: 'current_products.json',
            new_prices_filename: 'new_prices.json',
            //success_webhook: 'https://hook.eu1.make.com/i2ca8f2h6rxfabfk01yagdm1hw8jw673'
        })
    })
    .then( async (response) => {
        const text = await response.text(); 
        expect(response.status).toBe(200);
    });
});