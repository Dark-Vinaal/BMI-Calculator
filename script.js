function calculateBMI() {
    let weight = prompt("Enter your weight :");
    let height = prompt("Enter your height :");

    let weightInKg = parseFloat(weight);
    let heightInM = parseFloat(height) / 100;

    let bmi = weightInKg / (heightInM * heightInM);
    document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}