const termTopics = interviews => {
  // Code here!
  const ans = [0, 0, 0];
  interviews.map(interview => {
    switch (interview) {
      case "smart city":
        ans[0]++;
        break;
      case "arts funding":
        ans[1]++;
        break;
      case "transportation":
        ans[2]++;
        break;
    }
  });
  return ans;
  // Remember to return an array!
};
