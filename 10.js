const whereCanIPark = (spots, vehicle) => {
  // Code here!
  ans = false;
  switch (vehicle) {
    case "regular":
      spots.map((spotRow, xIndex) => {
        spotRow.map((spot, yIndex) => {
          spot === "R" ? (ans = [yIndex, xIndex]) : null;
        });
      });
      break;
    case "small":
      spots.map((spotRow, xIndex) => {
        spotRow.map((spot, yIndex) => {
          spot === "R" || spot === "S" ? (ans = [yIndex, xIndex]) : null;
        });
      });
      break;
    case "motorcycle":
      spots.map((spotRow, xIndex) => {
        spotRow.map((spot, yIndex) => {
          spot === "R" || spot === "S" || spot === "M"
            ? (ans = [yIndex, xIndex])
            : null;
        });
      });
      break;
  }
  return ans;
};
