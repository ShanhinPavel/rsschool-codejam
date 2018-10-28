let countSum = function sumOfOther(array) {
  if (!Array.isArray(array)) {
    return false; 
  }
  let arrayResult = [];
  for (let index = 0; index < array.length; index++) {
    let temp = 0;
    for (let index1 = 0; index1 < array.length; index1++) {
      if (index === index1) {
        continue;
      };
      temp += array[index1];
    }
    arrayResult.push(temp);
  }
  return arrayResult;
};

module.exports.countSum = countSum;