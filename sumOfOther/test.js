const assert = require('assert');
const sumOfOther = require('./src/index.js');

describe('sumOfOthers', () => {
  it('1', () => {
    assert.deepEqual(sumOfOther.countSum([2, 3, 4, 1]), [8, 7, 6, 9], 'Both arrays should be equal');
  });
  it('2', () => {
    assert.deepEqual(sumOfOther.countSum([2, 1, 3, 1]), [5, 6, 4, 6], 'Both arrays should be equal');
  });
  it('3', () => {
    assert.notDeepStrictEqual(sumOfOther.countSum([2, 1, 3, 1]), [5, 6, 4, 4], "Both arrays shouldn't be equal");
  });
  it('4', () => {
    assert.notDeepStrictEqual(sumOfOther.countSum([5, 6, 7, 1]), [14, 13, 12, 5], "Both arrays shouldn't be equal");
  });
  it('5', () => {
    assert.equal(sumOfOther.countSum('banana'), false, 'Argument which was passed in function shoul be an array');
  });

});
