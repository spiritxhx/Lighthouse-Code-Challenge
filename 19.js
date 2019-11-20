const pumpkinSpice = money => {
  const ans = [0, 0, 0, 0];
  ans[0] = Math.floor(money / 5);
  ans[1] = Math.floor((money - 5 * ans[0]) / 3);
  ans[2] = money - 5 * ans[0] - 3 * ans[1];
  ans[3] = ans[0] * 30 + ans[1] * 15 + ans[2] * 3;
  return ans;
};
