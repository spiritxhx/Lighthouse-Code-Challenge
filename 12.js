const checkAir = function(samples, threshold) {
  // Code here!
  let score = 0;
  samples.map(sample => {
    score += sample === "dirty" ? 1 : 0;
  });
  return score / samples.length < threshold ? "Clean" : "Polluted";
};
