function bmiCalculator(weight, height) {
    // BMI Formula bmi = weight (kg) / height² (m²)
    var heightCalculate = height**2;
    var calculator = Math.round(weight / heightCalculate);
    return console.log(calculator);
}
bmiCalculator(70, 1.8);