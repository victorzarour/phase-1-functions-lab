// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 42){
        return distance - 42;
    } 
    if (distance < 42){
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination){
        return (start - destination) * 264;
    }
    if (start < destination){
        return (destination - start) * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    let distanceFeet = distanceTravelledInFeet(start, destination)
    if (distanceFeet < 400) {
        return 0
    }
    if (distanceFeet <= 2000) {
        return (distanceFeet - 400) * .02
    }
    if (distanceFeet <= 2500) {
        return 25
    }
    if (distanceFeet > 2500) {
        return 'cannot travel that far'
    }
  }