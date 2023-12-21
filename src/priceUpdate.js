const auth = require('./auth');
const gs = require('./storage');



async function createChangesList(current_products, new_prices) {
    return new Promise((resolve) => {
        let changes = [];

        new_prices.forEach((new_price) => {
            let current_product = current_products.filter((product) => {
                return product.sku == new_price.sku;
            })[0];

            if (current_product !== undefined && 
                new_price.sku == current_product.sku &&
                new_price.price !== current_product.pricing.base_price.value) {
                changes.push({...current_product, pricing: new_price.price});
            }
        });

        resolve(changes);
    });
}



async function run (req, res) {
    const key = req.get("Authorization").split(' ')[1];
    const valid = auth.authenticate(key);

    if (!valid) {
        res.status(403).send('Forbidden');
        return;
    }

    if (!req.body?.current_products_filename) {
        console.error('current_products_filename was not sent');
        res.status(400).send('Bad Request');
        return;
    }

    if (!req.body?.new_prices_filename) {
        console.error('new_prices_filename was not sent');
        res.status(400).send('Bad Request');
        return;
    }

    try {
        await gs.setBucketName(process.env.GS_BUCKET);
        const current_products = await gs.getJSONFile(req.body?.current_products_filename);
        const new_prices = await gs.getJSONFile(req.body?.new_prices_filename);
        const changes = await createChangesList(current_products, new_prices);
        await gs.saveFile('changes.json', JSON.stringify(changes));
    } catch(e) {
        console.error('Error in priceUpdate.js: ' + e);
        res.status(500).send('Server Error');
        return;
    }

    res.send('OK');
}



module.exports = {
    run,
    createChangesList
};