const finalPosition = moves => {
  const ans = [0, 0];
  moves.map(move => {
    switch (move) {
      case "north":
        ans[1]++;
        break;
      case "south":
        ans[1]--;
        break;
      case "east":
        ans[0]++;
        break;
      case "west":
        ans[0]--;
        break;
    }
  });
  return ans;
};
