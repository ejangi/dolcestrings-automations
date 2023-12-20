const functions = require('@google-cloud/functions-framework');
const express = require('express');
const app = express();
const priceUpdate = require('./priceUpdate');



app.post('/price-update', priceUpdate.run);
app.get('/', (req, res) => {
    res.send('OK');
});

/**
 * Mount express app
 * @param req https://expressjs.com/en/api.html#req
 * @param res https://expressjs.com/en/api.html#res
 */
// exports.webhooks = app;
functions.http('webhooks', app);