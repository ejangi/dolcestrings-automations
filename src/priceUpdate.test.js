const priceUpdate = require('./priceUpdate');



test('create changes list', async () => {
    const current_prices = [{"sku":"FSVNSO16","pricing":{"base_price":{"value":400,"currency":"AUD"}},"product_id":"6288917bf7eeda2723aa6cf3","product_variant_id":"1bbdb94b-379d-4c43-a062-e0219f6c8d7b"},{"sku":"FSVNSO18","pricing":{"base_price":{"value":439,"currency":"AUD"}},"product_id":"6288917bf7eeda2723aa6cf3","product_variant_id":"560e2f2c-1af3-49a1-aa84-f90d080c28a5"}];
    const new_prices = [{"sku":"FSVNSO16","price":439},{"sku":"FSVNSO18","price":439}];

    const changes = await priceUpdate.createChangesList(current_prices, new_prices);

    expect(changes.length).toBe(1);
    expect(changes[0].pricing).toBe(439);
});