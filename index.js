// Code your solution here
function findMatching (driversArray, driverString) {
    return driversArray.filter(driver =>
        driver.toLowerCase() === driverString.toLowerCase()
        )
}

function fuzzyMatch (driversArray, driverString) {
    return driversArray.filter(driver =>
        driver[0] === driverString[0])
}

function matchName(driversArray, driverString) {
    return driversArray.filter(driver =>
        driver.name === driverString)
}