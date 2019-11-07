const castVote = (name, votes) => {
  // Code here!
  switch (name) {
    case "Tim":
      votes[0]++;
      break;
    case "Sally":
      votes[1]++;
      break;
    case "Beth":
      votes[2]++;
      break;
  }
  return votes;
  // Remember to return a value!
};
