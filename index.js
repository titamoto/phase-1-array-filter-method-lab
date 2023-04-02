function findMatching(driversNames, string) {
return driversNames.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driversNames, string) {
    return driversNames.filter(name => name.startsWith(string));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}