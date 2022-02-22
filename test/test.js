const assert = require('assert');

describe('Math', function(){

    it('Summ', function(){
        let a = 10;
        let b = 20;
        let c = a+b;

        assert.equal(c, 30);

    })

    it('Multy', function(){
        let aa = 10;
        let bb = 20;
        let cc = aa*bb;

        assert.equal(cc, 200);
    })
})