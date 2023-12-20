const EXPECTED_SECRET_KEY = process.env.SECRET_KEY;

function authenticate(key) {
    return key == EXPECTED_SECRET_KEY;
}

module.exports = {
    authenticate
}