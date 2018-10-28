const assert = require('assert');
const makedSum = require('./src/index.js');

describe('make', function() { 
  it('1', function() {
    assert.equal(makedSum.makeSum(15)(34, 21, 666)(41)(makedSum.sumFunc), 777);
  });
  it('2', function() {
    assert.equal(makedSum.makeSum(15,34)(10)(makedSum.sumFunc), 59);
  });
  it('3', function() {
    assert.notEqual(makedSum.makeSum(10)(20,50,60)(makedSum.sumFunc), 139);
  });
  it('4', function() {
    assert.notEqual(makedSum.makeSum(10)(20,12,60)(makedSum.sumFunc), 99);
  });
  it('5', function() {
    assert.notEqual(makedSum.makeSum(20,12,60)(makedSum.sumFunc), false, 'You should enter first argument');
  });
});


