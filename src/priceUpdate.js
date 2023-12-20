const auth = require('./auth');



function run (req, res) {
    const key = req.get("Authorization").split(' ')[1];
    const valid = auth.authenticate(key);

    if (!valid) {
        res.status(403).send('Forbidden');
        return;
    }

    res.send('OK');
}



module.exports = {
    run
};