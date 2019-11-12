const busTimes = buses => {
  // Code here!
  Object.keys(buses).map(bus => {
    buses[bus] = buses[bus].distance / buses[bus].speed;
  });
  return buses;
};
