const gs = require('./storage');



test('can retrieve file contents', async () => {
    await gs.setBucketName(process.env.GS_BUCKET);
    const contents = await gs.getFile('current_products.json');

    expect(contents).not.toBe(null);

    const json = JSON.parse(contents.toString());
    expect(json.length).not.toBe(0);
    expect(json[0].sku).not.toBe(null);
});