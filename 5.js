const chooseStations = stations => {
  // Code here!
  let ans = [];
  stations
    .filter(
      station =>
        station[1] >= 20 &&
        (station[2] === "school" || station[2] === "community centre")
    )
    .map(station => {
      ans.push(station[0]);
    });
  return ans;
  // Remember to return a value!
};
