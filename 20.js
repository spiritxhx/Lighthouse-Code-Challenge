const PI = 3.14159;

const sphereVolume = function(radius) {
  return ((radius * radius * radius * 4) / 3) * PI;
};

const coneVolume = function(radius, height) {
  return (radius * radius * height * PI) / 3;
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let ans = 0;
  solids.map(solid => {
    switch (solid.type) {
      case "sphere":
        ans += sphereVolume(solid.radius);
        break;
      case "cone":
        ans += coneVolume(solid.radius, solid.height);
        break;
      case "prism":
        ans += prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
  });
  return ans;
};
