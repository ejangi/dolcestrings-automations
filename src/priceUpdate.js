const auth = require('./auth');
const gs = require('./storage');



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

    await gs.setBucketName(process.env.GS_BUCKET);
    const current_products = gs.getJSONFile(req.body?.current_products_filename);

    res.send('OK');
}



module.exports = {
    run
};