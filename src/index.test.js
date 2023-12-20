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
            'Authorization': 'Bearer abc123'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            file: 'mylongfilename.csv'
        })
    })
    .then( async (response) => {
        const text = await response.text(); 
        console.log(text);
        expect(response.status).toBe(200);
    });
});