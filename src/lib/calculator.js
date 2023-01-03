module.exports.sum = (number1, number2) => {
  const intNumber1 = parseInt(number1, 10);
  const intNumber2 = parseInt(number2, 10);

  if (Number.isNaN(intNumber1) || Number.isNaN(intNumber2)) throw new Error('Please, check your numbers!')
  return intNumber1 +intNumber2;
};
