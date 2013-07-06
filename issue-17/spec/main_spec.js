var main = require('../app/main.js');

describe('main.calculate(a, b)', function() {
    it('adds two numbers together', function() {
        expect(main.calculate(1, 2)).toBe(3);
    });
});

