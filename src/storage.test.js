const gs = require('./storage');



test('can retrieve file contents', async () => {
    await gs.setBucketName(process.env.GS_BUCKET);
    const contents = await gs.getFile('current_products.json');

    expect(contents).not.toBe(null);

    const json = JSON.parse(contents.toString());
    expect(json.length).not.toBe(0);
    expect(json[0].sku).not.toBe(null);
});



test('can get JSON file contents', async () => {
    await gs.setBucketName(process.env.GS_BUCKET);
    const json = await gs.getJSONFile('current_products.json');
    expect(json).not.toBe(null);
    expect(json.length).not.toBe(0);
    expect(json[0].sku).not.toBe(null);
});



test('can save file to bucket', async() => {
    const message = "Saved Successfully!";
    await gs.setBucketName(process.env.GS_BUCKET);
    await gs.saveFile('testing.json', JSON.stringify({"message":message}));
    const json = await gs.getJSONFile('testing.json');
    expect(json).not.toBe(null);
    expect(json.message).toBe(message);
})