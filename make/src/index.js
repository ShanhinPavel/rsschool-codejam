const makeSum = function make(...numbers) {
  if (numbers.length < 1) {
    return false;
  }
  let arrayArguments =[];
  arrayArguments.push(...numbers);

  function innerFunction(...args) {
    if (typeof(args[0]) === 'function') {
      let result = arrayArguments.reduce(args[0]);
      return result;
    }
    arrayArguments.push(...args);
    return innerFunction;
  }
  return innerFunction;
};

const sumFunc = function sum(a, b) {
    return a + b;
};

module.exports.makeSum = makeSum;
module.exports.sumFunc = sumFunc;