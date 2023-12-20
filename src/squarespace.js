const baseUrl = 'https://api.squarespace.com';
const userAgent = 'DolceStrings Automations';
const apiVersion = '1.0';

const endpointProducts = '/commerce/products';

let apiKey = null;



async function setApiKey(key) {
    return new Promise((resolve, reject) => {
        apiKey = key;
        resolve(key);
    });
}



async function retrieveAllProducts() {
    const res = await fetch(`${baseUrl}/${apiVersion}${endpointProducts}`, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': userAgent,
            'Authorization': `Bearer: ${apiKey}`
        },
    });

    if (res.status > 204) {
        throw new Error('Squarespace API returned: ' + res.status);
    }

    const json = await res.json();
    return json.products;
}



async function retrieveSpecificProduct(ids) {
    return fetch(`${baseurl}/${apiVersion}${endpointProducts}/${ids}`, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': userAgent,
            'Authorization': `Bearer: ${apiKey}`
        },
    });
}

module.exports = {
    setApiKey,
    retrieveAllProducts,
    retrieveSpecificProduct
}