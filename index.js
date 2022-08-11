function distanceFromHqInBlocks(distance) {
    return Math.abs(42 - distance)
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(distance) {
    const distanceInFeet = distanceFromHqInBlocks(distance)*264;
    return distanceInFeet
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet(start, end) {
    return Math.abs(start-end)*264
}
distanceTravelledInFeet(30, 35)

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400) {
        return 0
    } else if ( distance > 400  && distance <= 2000) {
        return 2.56
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}

calculatesFarePrice(40, 48)