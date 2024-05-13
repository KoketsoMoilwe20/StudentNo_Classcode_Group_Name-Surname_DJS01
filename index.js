/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

const accelerationValue = acc;
const timeInSeconds = time; 
const initialVelocity = 1000 / 3.6; //converting to m/s
const initialDistance = d * 1000; //convert to meters



// Pick up an error with how the function below is called and make it robust to such errors
 const calcNewVel = (velocity, acceleration, duration) => { 
  //insertion of valid input parameters
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof duration !== 'number') {
    throw new Error('Invalid input types');
  }

  // Calculate new velocity based on acceleration
  const newVelocity = velocity + (acceleration * duration);

  return newVelocity;
}

//Error handling
if (typeof initialVelocity !== 'number' ||
typeof accelerationValue !== 'number' ||
typeof timeInSeconds !== 'number' ||
typeof initialDistance !== 'number') {
  throw new Error ('Invalid parameter value')
}

//Calculate new velocity
const newVelocityInMetersPerSecond = calcNewVel(initialVelocity, accelerationValue, timeInSeconds);

// Calculate new distance
const newDistanceInMeters = initialDistance + (newVelocityInMetersPerSecond * timeInSeconds);

// Calculate remaining fuel

const calculateRemainingFuel = (fuelAmount, fuelBurnRate, duration) => {
  // Validate input types
  if (
    typeof fuelAmount !== 'number' ||
    typeof fuelBurnRate !== 'number' ||
    typeof duration !== 'number'
  ) {
    throw new Error('Invalid input types for remaining fuel calculation (expected numbers)');
  }

  // Handle potential division by zero (if fuel burn rate is 0)
  if (fuelBurnRate === 0) {
    throw new Error('Fuel burn rate cannot be zero');
  }

  // Calculate remaining fuel
  const remainingFuel = fuelAmount - (fuelBurnRate * duration);
  return remainingFuel;
};

// Calculate remaining fuel
const remainingFuelInKilograms = calculateRemainingFuel(fuel, fbr, timeInSeconds);


// Corrected calculations with unit conversions (assuming output in km/h and km)
const correctedNewVelocity = newVelocityInMetersPerSecond * 3.6; // km/h
const correctedNewDistance = newDistanceInMeters / 1000; // km

console.log(`Corrected New Velocity: ${correctedNewVelocity} km/h`);
console.log(`Corrected New Distance: ${correctedNewDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKilograms} kg`);






