const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  return unregisteredVoters.filter(voter => name !== voter);
  // Remember to return a value!
};
