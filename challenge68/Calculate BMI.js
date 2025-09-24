// Code wars Kata8 Solutions

// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const mass = weight / (height * height);

  if (mass <= 18.5) {
    return "Underweight";
  } else if (mass <= 25.0) {
    // Changed from 20.0 to 25.0 for correct range
    return "Normal";
  } else if (mass <= 30.0) {
    return "Overweight";
  } else {
    return "Obese"; // Fixed typo ("Obes" → "Obese")
  }
}
console.log(bmi(79, 177));
