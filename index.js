// Function 1: Blocks from HQ
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42);
}

// Function 2: Feet from HQ
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

// Function 3: Feet travelled between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// function calculatesFarePrice(start, destination) {
//   return Math.abs(start - destination) * 0; 
// }

function calculatesFarePrice(start, destination) {
  // 1 block = 264 feet
  const distanceInFeet = Math.abs(start - destination) * 264;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}