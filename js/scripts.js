function fToC(degreesF) {
    return ((degreesF - 32) * 5 / 9).toFixed(2);
}

const degreesF = parseInt(prompt("What is the temperature in degrees F: "));

window.alert(degreesF + " degrees F is " + fToC(degreesF) + " degress C.")