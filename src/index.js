const express = require('express');
const app = express();
const priceUpdate = require('./priceUpdate.js');



app.post('/webhooks/price-update', priceUpdate.run);
app.get('/webhooks', (req, res) => {
    res.send('OK');
});

/**
 * Mount express app
 * @param req https://expressjs.com/en/api.html#req
 * @param res https://expressjs.com/en/api.html#res
 */
exports.webhooks = app;