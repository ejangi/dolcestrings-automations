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
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            file: 'mylongfilename.csv'
        })
    })
    .then( (response) => { 
        expect(response.status).toBe(200);
    });
});