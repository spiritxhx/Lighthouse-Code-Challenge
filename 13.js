const lightsOn = function(lights) {
  lights.map(light=>{
    light.on=true;
  });
  return lights;
}

const lightsOff = function(lights) {
  lights.map(light=>{
    light.on=false;
  });
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  lights.map(light=>{
    light.on=lightsAreOn?false:true;
  });
  return lights;
}