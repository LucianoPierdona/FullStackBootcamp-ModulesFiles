function bmiCalculator(weight, height) {
        // BMI Formula bmi = weight (kg) / height² (m²)
        var heightCalculate = height**2;
        var calculator = Math.floor(weight / heightCalculate);
        if (calculator < 18.5) {
            return "Your BMI is " + calculator + ", so you are underweight.";
        }
        if (calculator > 18.5 && calculator < 24.9) {
            return "Your BMI is " + calculator + ", so you have a normal weight.";
        }
        if (calculator > 24.9) {
            return "Your BMI is " + calculator + ", so you are overweight.";
        }
}
bmiCalculator(60, 2);