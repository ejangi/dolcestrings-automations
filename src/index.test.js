test("Function can be invoked", async () => {
    await fetch("http://localhost:8080/", {
        method: "post",
        headers: {
            'Accept': 'application/json',
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