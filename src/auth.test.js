const auth = require('./auth');



test('can authenticate', () => {
    const valid = auth.authenticate('abc123');
    expect(valid).toBe(true);
});



test('rejects invalid auth key', () => {
    const valid = auth.authenticate('garbage123');
    expect(valid).toBe(false);
})