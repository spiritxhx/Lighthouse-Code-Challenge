const festivalColours = color1 => {
  let ans1 = color1 + 150 + (color1 + 150 > 360 ? -360 : 0);
  let ans2 = color1 + 210 + (color1 + 210 > 360 ? -360 : 0);
  return ans1 > ans2 ? [ans2, ans1] : [ans1, ans2];
};
