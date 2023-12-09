/**
 * This code is saved in a file named complex_code.js
 * It demonstrates a complex implementation of a Fahrenheit to Celsius temperature converter
 */

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

// Function to add leading zero for single digit numbers
function addLeadingZero(num) {
  return (num < 10 ? "0" : "") + num;
}

// Function to get current date and time
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = addLeadingZero(now.getMonth() + 1);
  const day = addLeadingZero(now.getDate());
  const hours = addLeadingZero(now.getHours());
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Function to log the converted temperature
function logConvertedTemperature(fahrenheit, celsius) {
  console.log(`[${getCurrentDateTime()}] ${fahrenheit}°F equals ${celsius}°C`);
}

// Main program
const temperaturesFahrenheit = [50, 68, 77, 86, 95];
const convertedTemperatures = [];

console.log("===== Fahrenheit to Celsius Converter =====");

temperaturesFahrenheit.forEach((temperature) => {
  const convertedTemperature = convertFahrenheitToCelsius(temperature);
  convertedTemperatures.push(convertedTemperature);
  logConvertedTemperature(temperature, convertedTemperature);
});

console.log("===== Conversion complete! =====");
console.log("Converted Temperatures (°C):", convertedTemperatures);
console.log("===============================");

// Other functions, logic, or data can be added below...