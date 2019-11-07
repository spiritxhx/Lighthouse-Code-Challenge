const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  if (voter_signatures.length !== voter_ids.length) return false;
  let ans = "All clear, we can count the votes!";
  voter_signatures.map((voter, index) => {
    if (voter !== voter_ids[index]) {
      ans = "FRAUD!";
    }
  });
  return ans;
};
