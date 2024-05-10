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





// Pick up an error with how the function below is called and make it robust to such errors
 const calcNewVel = (vel, acc, time) => { 
  //insertion of valid input parameters
  if (typeOf acc !== 'number' || typeOf vel !== 'number' || typeOf time !== 'number') {
    throw new Error('Invalid input');
  }

  // Calculate new velocity based on acceleration
  const newVelocity = velocity + (acceleration * duration);

  return newVelocity;
}

if (velocity.unit !== 'km/h' || acceleration.unit !== 'm/s^2' || duration.unit !== 's' || initialDistance.unit !== 'km' || fuelAmount.unit !== 'kg' || fuelBurnRate.unit !== 'kg/s') {
  throw new Error('Invalid unit of measurement for one or more input parameters');
}

const vel2 = calcNewVel(vel, acc, time) //calculates new velocity based on acceleration

const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






