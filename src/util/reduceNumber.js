const reduceNumber = (num) => {
  while (num > 9 && ![11, 22, 33].includes(num)) {
    num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

export default reduceNumber;
